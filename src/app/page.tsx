import { Hero } from '@/app/components/landing/hero/Hero';
import { Profile } from '@/app/components/landing/profile/Profile';
import { ProjectCards } from '@/app/components/landing/projectCards/ProjectCards';
import initTranslations from '@/app/i18n';
import { getLocale } from '@/lib/getLocale';
import { LandingTranslationKeys } from '@/types/i18nTypes';

export default async function Home() {
  const locale = await getLocale();

  const { t } = (await initTranslations(locale, ['landing'])) as {
    t: (key: LandingTranslationKeys) => string;
  };

  return (
    <div className="relative">
      <Hero t={t} />
      <Profile t={t} />
      <ProjectCards t={t} />
    </div>
  );
}
