import { LandingTranslationKeys } from '@/types/i18nTypes';
import Link from 'next/link';

export interface FooterProps {
  t: (key: LandingTranslationKeys) => string;
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="flex w-full justify-between pt-4 text-sm text-gray-500">
      <p>
        {t('footer.created_by')} {new Date().getFullYear()}
      </p>

      <Link
        href="impressum"
        className="text-sm text-gray-100 transition-colors hover:text-gray-400"
      >
        {t('footer.legal_notice')}
      </Link>
    </footer>
  );
};
