"use client";

import { useTranslations } from "next-intl";

const ClientPage = () => {
  const t = useTranslations();
  return <div>{t("greeting")}</div>;
};

export default ClientPage;
