import { cookies } from 'next/headers';

export type Locale = 'en' | 'de';

export const getLocale = async (): Promise<Locale> => {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value as
    | Locale
    | undefined;
  return cookieLocale || 'en';
};
