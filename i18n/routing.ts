import { defineRouting } from 'next-intl/routing';

export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
    locales,
    defaultLocale,
    pathnames: {
        '/': '/',
    }
});
