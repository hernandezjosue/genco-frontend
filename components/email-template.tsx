import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

type NewContactNotificationEmailProps = {
    name: string;
    lastName?: string;
    phone?: string;
    email: string;
    message: string;
    locale?: "en" | "es";
};

const NewContactNotificationEmail = ({
                                         name,
                                         lastName,
                                         phone,
                                         email,
                                         message,
                                         locale = "es",
                                     }: NewContactNotificationEmailProps) => {
    const t = (() => {
        const copy = {
            en: {
                preview: "New contact received from the website - Genco",
                heading: "New contact - Genco",
                greeting: "Hello,",
                intro:
                    "You have received a new message from the contact section of the website. Below are the details:",
                nameLabel: "Name",
                lastNameLabel: "Last Name",
                phoneLabel: "Phone",
                emailLabel: "Email",
                messageLabel: "Message",
                followUp:
                    "Please review this information and follow up with the contact as appropriate.",
                regards: "Regards,",
                team: "Genco Team",
                footerNote: "This email was generated automatically. Please do not reply.",
            },
            es: {
                preview: "Nuevo contacto recibido desde la página web - Genco",
                heading: "Nuevo contacto - Genco",
                greeting: "Hola,",
                intro:
                    "Has recibido un nuevo mensaje desde la sección de contacto de la página web. A continuación se muestran los detalles:",
                nameLabel: "Nombre",
                lastNameLabel: "Apellido",
                phoneLabel: "Teléfono",
                emailLabel: "Correo electrónico",
                messageLabel: "Mensaje",
                followUp:
                    "Por favor, revisa esta información y da seguimiento al contacto según corresponda.",
                regards: "Saludos,",
                team: "Equipo Genco",
                footerNote:
                    "Este correo se generó de forma automática. Por favor, no respondas a este mensaje.",
            },
        } as const;

        const lang = locale === "en" ? "en" : "es";
        return copy[lang];
    })();

    return (
        <Html lang={locale} dir="ltr">
            <Head />
            <Preview>{t.preview}</Preview>
            <Tailwind>
                <Body className="bg-card font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] max-w-[700px] mx-auto p-[40px]">
                        {/* Header */}
                        <Section className="text-center mb-[24px]">
                            <Heading className="text-[24px] font-bold text-black m-0 mb-[8px]">
                                {t.heading}
                            </Heading>
                        </Section>

                        {/* Main content */}
                        <Section className="mb-[24px]">
                            <Text className="text-[16px] text-gray-800 mb-[12px] leading-[24px]">
                                {t.greeting}
                            </Text>

                            <Text className="text-[16px] text-gray-800 mb-[20px] leading-[24px]">
                                {t.intro}
                            </Text>

                            {/* Contact details */}
                            <Section className="bg-gray-50 rounded-[8px] p-[16px] mb-[16px] border border-solid border-gray-200">
                                <Text className="text-[14px] text-gray-800 m-0">
                                    <strong>{t.nameLabel}:</strong> {name}
                                    {lastName && (
                                        <Text className="text-[14px] text-gray-800 m-0">
                                            <strong>{t.lastNameLabel}:</strong> {lastName}
                                        </Text>
                                    )}
                                </Text>
                                {phone && (
                                    <Text className="text-[14px] text-gray-800 m-0">
                                        <strong>{t.phoneLabel}:</strong> {phone}
                                    </Text>
                                )}
                                <Text className="text-[14px] text-gray-800 m-0">
                                    <strong>{t.emailLabel}:</strong> {email}
                                </Text>
                            </Section>

                            {/* Message */}
                            <Section className="bg-gray-50 rounded-[8px] p-[16px] border border-solid border-gray-200">
                                <Text className="text-[14px] font-semibold text-gray-900 m-0 mb-[8px]">
                                    {t.messageLabel}
                                </Text>
                                <Text className="text-[14px] text-gray-800 whitespace-pre-line m-0">
                                    {message}
                                </Text>
                            </Section>

                            <Text className="text-[16px] text-gray-800 mt-[20px] leading-[24px]">
                                {t.followUp}
                            </Text>

                            <Text className="text-[16px] text-gray-800 mt-[16px] leading-[24px]">
                                {t.regards}
                                <br />
                                {t.team}
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="border-t border-solid border-gray-200 pt-[16px] mt-[24px]">
                            <Text className="text-[12px] text-gray-500 text-center m-0">
                                {t.footerNote}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default NewContactNotificationEmail;