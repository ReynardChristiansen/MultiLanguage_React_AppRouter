import { useTranslations } from "next-intl";
import Link from "next/link";
import Alertmessage from "./Alertmessage";


export default function Home(): JSX.Element {
  const t = useTranslations("Index");

  return (
    <div>
      <div>
        <Link href="/en" >
          In English
        </Link>{" "}
        |{" "}
        <Link href="/in" >
          In Finnish
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
      </div>
      <div>
        <Alertmessage message={t("alert")}/>
      </div>
    </div>
  );
}
