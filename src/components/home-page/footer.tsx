import BodyText from "../typography/body-text.js";

// import { NAVIGATION, FOOTER_CTA_LINK } from "@/lib/navigation";
const FOOTER_CTA_LINK = "#";

const Footer = (): React.ReactElement => {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center gap-8">
        {/* <Link href={NAVIGATION.LEGAL}> */}
        <BodyText className="underline" type="span">
          Mentions légales
        </BodyText>
        {/* </Link> */}

        {/* <CookiesSettingsButton appPrefix="ui" asText /> */}
      </div>

      <div>
        <BodyText>
          &copy; {new Date().getFullYear()}{" "}
          <a href="/" className="font-semibold">
            Nakas UI
          </a>{" "}
          - Par{" "}
          <a
            href={FOOTER_CTA_LINK}
            className="text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMBZ
          </a>
        </BodyText>

        <BodyText className="mb-4">Tous droits réservés.</BodyText>
      </div>
    </footer>
  );
};

export default Footer;
