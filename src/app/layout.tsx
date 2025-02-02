import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/app/components/common/Header';

import { ThemeProvider } from '@/context/ThemeContext';
import { cookies } from 'next/headers';
import { ContactsWithFooter } from '@/app/components/landing/contacts/ContactsWithFooter';
import TranslationsProvider from './clientComponents/TranslationsProvider';
import initTranslations from './i18n';
import { getLocale } from '@/lib/getLocale';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Yatsenko Mykhailo',
  description: 'Frontend Developer',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const themeCookie = (await cookieStore).get('theme');
  const locale = await getLocale();

  const { resources } = await initTranslations(locale, ['common']);
  const serverThemeCookie = themeCookie?.value as 'dark' | 'light' | undefined;

  return (
    <html
      lang="en"
      className={serverThemeCookie === 'dark' ? serverThemeCookie : ''}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <TranslationsProvider
          namespaces={['common']}
          locale={locale}
          resources={resources}
        >
          <ThemeProvider serverThemeCookie={serverThemeCookie}>
            <Header />
            <main className="relative z-[2] bg-background shadow-sm h-sm:mb-[30rem] sm576:h-sm:mb-96">
              {children}
              {modal}
            </main>
            <div className="relative bottom-0 z-[1] h-fit w-full h-sm:fixed h-sm:h-[30rem] sm576:h-sm:h-96">
              <ContactsWithFooter locale={locale} />
            </div>
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
