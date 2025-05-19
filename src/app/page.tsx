import { Profile } from '@/app/components/landing/profile/Profile';
import { Projects } from '@/app/components/landing/Projects/Projects';
import initTranslations from '@/app/i18n';
import { getLocale } from '@/lib/getLocale';
import { LandingTranslationKeys } from '@/types/i18nTypes';
import { Hero } from './components/landing/hero/Hero';
import { AnimatedBgWrapper } from './components/common/AnimatedBgWrapper';

export default async function Home() {
  const locale = await getLocale();

  const { t } = (await initTranslations(locale, ['landing'])) as {
    t: (key: LandingTranslationKeys) => string;
  };

  return (
    <AnimatedBgWrapper>
      <Hero t={t} />
      <Profile t={t} />
      <Projects t={t} />
    </AnimatedBgWrapper>
  );
}
