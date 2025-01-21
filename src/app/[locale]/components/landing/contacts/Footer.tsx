import { LandingTranslationKeys } from "@/types/i18nTypes";

export interface FooterProps {
   t: (key: LandingTranslationKeys) => string;
 
}

export const Footer = ({t}:FooterProps) => {
  return (
    <footer className="flex w-full justify-between pt-4 text-sm text-gray-500">
      <p>{t("footer.created_by")} {new Date().getFullYear()}</p>
      <a className="text-sm text-gray-100 transition-colors hover:text-gray-400">
      {t("footer.legal_notice")}
      </a>
    </footer>
  );
};
