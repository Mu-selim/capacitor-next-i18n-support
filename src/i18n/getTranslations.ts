import { createTranslator } from "next-intl";

type TranslatorOptions = {
  locale: string;
  namespace?: string;
};

export const getTranslations = async (config: TranslatorOptions) => {
  const { locale, namespace } = config;
  const messagesModule = await import(`./messages/${locale}.json`);

  const translator = createTranslator({
    locale,
    messages: messagesModule.default,
    namespace,
  });

  return translator.rich;
};
