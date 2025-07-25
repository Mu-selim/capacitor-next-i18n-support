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
  const messages = await getMessages(localeParams.locale);
  return (
    <html lang={localeParams.locale}>
      <body>
        <Providers messages={messages} locale={localeParams.locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
