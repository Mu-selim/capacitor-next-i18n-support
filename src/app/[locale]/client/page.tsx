"use client";

import { ChangeLang } from "@/component/changeLang";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const ClientPage = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className="grid items-center justify-items-center min-h-screen px-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{t("greeting")}</h1>
        <ChangeLang />
        <p>
          {t("current_language", {
            locale: locale.toUpperCase(),
          })}
        </p>
        <Link href={`/`} className="text-blue-500 hover:underline">
          /
        </Link>
      </div>
    </div>
  );
};

export default ClientPage;
