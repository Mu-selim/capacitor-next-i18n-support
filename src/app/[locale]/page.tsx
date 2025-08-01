import Image from "next/image";
import Link from "next/link";

import { getTranslations } from "@/i18n";
import { ChangeLang } from "@/component/changeLang";

import next from "@/assets/next.svg";
import capacitorjs from "@/assets/capacitorjs.svg";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const Page = async ({ params }: PageProps) => {
  const localeParams = await params;
  const t = await getTranslations({ locale: localeParams.locale });

  return (
    <div className="grid items-center justify-items-center min-h-screen px-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Image src={next} alt="Next.js Logo" width={140} height={100} />
          <Image
            src={capacitorjs}
            alt="Capacitor Logo"
            width={70}
            height={100}
          />
        </div>
        <h1 className="text-2xl font-bold">{t("greeting")}</h1>
        <ChangeLang />
        <p>
          {t("current_language", {
            locale: localeParams.locale.toUpperCase(),
          })}
        </p>
        <Link
          href={`/${localeParams.locale}/client`}
          className="text-blue-500 hover:underline"
        >
          /client
        </Link>
      </div>
    </div>
  );
};

export default Page;
