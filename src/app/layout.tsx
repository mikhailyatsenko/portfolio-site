import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/app/components/common/Header';

import { ThemeProvider } from '@/context/ThemeContext';
import { GradientProvider } from '@/context/GradientContext';
import { cookies } from 'next/headers';
import { ContactsWithFooter } from '@/app/components/landing/contacts/ContactsWithFooter';
import TranslationsProvider from './clientComponents/TranslationsProvider';
import initTranslations from './i18n';
import { getLocale } from '@/lib/getLocale';
import Script from 'next/script';
import { GradientWrapper } from './clientComponents/GradientWrapper';
import { ScrollTracker } from './clientComponents/ScrollTracker';

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
  const serverThemeCookie = themeCookie?.value as 'dark' | 'light' | undefined;

  const locale = await getLocale();
  const { resources } = await initTranslations(locale, ['common']);

  return (
    <html
      lang="en"
      className={serverThemeCookie === 'dark' ? serverThemeCookie : ''}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SH91XJBX3R"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SH91XJBX3R');`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <TranslationsProvider
          namespaces={['common']}
          locale={locale}
          resources={resources}
        >
          <ThemeProvider serverThemeCookie={serverThemeCookie}>
            <GradientProvider>
              <Header />
              <main className="relative z-[2] overflow-hidden bg-background shadow-sm h-sm:mb-[30rem] sm576:h-sm:mb-96">
                <GradientWrapper />
                {children}
                {modal}
                <ScrollTracker />
              </main>
              <div className="relative bottom-0 z-[1] h-fit w-full overflow-hidden h-sm:fixed h-sm:h-[30rem] sm576:h-sm:h-96">
                <ContactsWithFooter locale={locale} />
              </div>
            </GradientProvider>
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
