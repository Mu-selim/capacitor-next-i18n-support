import Providers from "@/app/[locale]/providers";
const LOCALES = ["en", "ar"];

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

async function getMessages(locale: string) {
  const messageModule = await import(`@/i18n/messages/${locale}.json`);

  return messageModule.default;
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const localeParams = await params;
  const locale = localeParams.locale;
  const messages = await getMessages(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir}>
      <body>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
