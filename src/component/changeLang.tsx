"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const ChangeLang = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(`/${locale}`, '');

  const handleChangeLocale = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <button
      onClick={handleChangeLocale}
      className="px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer focus:outline-2 focus:outline-white focus:outline-offset-2"
    >
      {t("change_locale")}
    </button>
  );
};
