import {getRequestConfig} from 'next-intl/server';

export const locales = ['pt', 'en', 'fr'] as const;

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  const validLocale = locales.includes((locale || 'pt') as (typeof locales)[number])
    ? locale!
    : 'pt';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});