import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-arabic',
});

export const metadata: Metadata = {
  title: 'Adnan Al-Thour | Operations Supervisor & E-commerce Expert',
  description:
    'Executive portfolio of Adnan Al-Thour. Scaling enterprise operations, optimizing digital commerce architectures, and leading mission-critical fulfillment systems.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate that incoming `locale` is supported
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === 'ar';
  const fontClass = isRtl
    ? `${ibmPlexArabic.variable} font-arabic`
    : `${inter.variable} font-sans`;

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={fontClass}>
      <body className="min-h-screen bg-pureWhite text-deepBlack antialiased selection:bg-darkBlue selection:text-pureWhite">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
