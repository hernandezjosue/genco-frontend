"use server";

import { Resend } from "resend";
import * as z from "zod";
import ContactThankYouEmail from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
    success?: boolean;
    error?: string;
    message?: string;
};

// Mensajes de validación por idioma
const validationMessages = {
    en: {
        firstNameRequired: "First name is required",
        lastNameRequired: "Last name is required",
        emailInvalid: "Please enter a valid email address",
        messageRequired: "Message is required",
    },
    es: {
        firstNameRequired: "El nombre es obligatorio",
        lastNameRequired: "El apellido es obligatorio",
        emailInvalid: "Por favor, ingresa un correo electrónico válido",
        messageRequired: "El mensaje es obligatorio",
    },
} as const;

// Factory del schema dependiente del locale
function getFormSchema(locale: "en" | "es") {
    const v = validationMessages[locale];
    return z.object({
        firstName: z.string().min(1, v.firstNameRequired),
        lastName: z.string().min(1, v.lastNameRequired),
        email: z.string().email(v.emailInvalid),
        message: z.string().min(1, v.messageRequired),
    });
}

export async function submitContactForm(
    _prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    // Detectar locale enviado desde el cliente (fallback a "en")
    const localeFromForm = (formData.get("locale") as string) || "en";
    const locale: "en" | "es" = localeFromForm === "es" ? "es" : "en";

    // Diccionario mínimo de i18n para respuestas del servidor y asunto del correo
    const copy = {
        en: {
            invalid: "Please check the form fields and try again.",
            success: "Success! I'll get back to you as soon as possible.",
            sendFail: "Failed to send email. Please try again.",
            serverError: "Something went wrong. Please try again.",
            subject: "Thank you for contacting me",
        },
        es: {
            invalid: "Por favor, revisa los campos del formulario e inténtalo de nuevo.",
            success: "¡Éxito! Me pondré en contacto contigo lo antes posible.",
            sendFail: "No se pudo enviar el correo. Inténtalo de nuevo.",
            serverError: "Algo salió mal. Por favor, inténtalo de nuevo.",
            subject: "Gracias por contactarme",
        },
    } as const;
    const t = copy[locale];

    try {
        // Usar schema con mensajes según locale
        const formSchema = getFormSchema(locale);
        const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
        console.log("rawFormData", Object.fromEntries(formData.entries()));
        console.log("zodResult", result);

        if (!result.success) {
            // Aquí podrías mapear errores por campo si quieres (result.error.format())
            return {
                success: false,
                error: t.invalid,
            };
        }

        const data = result.data;

        const { error } = await resend.emails.send({
            from: "noreply@gencoc.com",
            to: [data.email],
            subject: t.subject,
            react: ContactThankYouEmail({
                name: data.firstName,
                lastName: data.lastName,
                email: data.email,
                message: data.message,
                locale,
            }),
        });

        if (error) {
            console.error("Resend error:", error);
            return {
                success: false,
                error: t.sendFail,
            };
        }

        return {
            success: true,
            message: t.success,
        };
    } catch (error) {
        console.error("Server action error:", error);
        return {
            success: false,
            error: t.serverError,
        };
    }
}