import { Hero } from '@/app/components/landing/hero/Hero';
import { Profile } from '@/app/components/landing/profile/Profile';
import { ProjectCards } from '@/app/components/landing/projectCards/ProjectCards';
import initTranslations from '@/app/i18n';
import { LandingTranslationKeys } from '@/types/i18nTypes';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  const locale = (await cookieStore).get('NEXT_LOCALE')?.value || 'en';

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
