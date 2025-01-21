import { Hero } from '@/app/[locale]/components/landing/hero/Hero';
import { Profile } from '@/app/[locale]/components/landing/profile/Profile';
import { ProjectCards } from '@/app/[locale]/components/landing/projectCards/ProjectCards';
import initTranslations from '@/app/i18n';
import { LandingTranslationKeys } from '@/types/i18nTypes';

interface HeroProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HeroProps) {
  const { locale } = await params;

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
