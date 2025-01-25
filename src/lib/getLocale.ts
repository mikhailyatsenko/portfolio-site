import { cookies } from 'next/headers';

export const getLocale = async (): Promise<string> => {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value;
  return cookieLocale || 'en';
};
