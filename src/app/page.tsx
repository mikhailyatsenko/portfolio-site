// import { Hero } from '@/app/components/landing/hero/Hero';
import { Profile } from '@/app/components/landing/profile/Profile';
import { Projects } from '@/app/components/landing/Projects/Projects';
import initTranslations from '@/app/i18n';
import { getLocale } from '@/lib/getLocale';
import { LandingTranslationKeys } from '@/types/i18nTypes';
import { Hero } from './components/landing/hero/Hero';

export default async function Home() {
  const locale = await getLocale();

  const { t } = (await initTranslations(locale, ['landing'])) as {
    t: (key: LandingTranslationKeys) => string;
  };

  return (
    <div className="relative">
      <Hero t={t} />
      <Profile t={t} />
      <Projects t={t} />
    </div>
  );
}
