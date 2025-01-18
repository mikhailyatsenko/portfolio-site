import { Hero } from '@/app/[locale]/components/landing/hero/Hero';
import { Profile } from '@/app/[locale]/components/landing/profile/Profile';
import { ProjectCards } from '@/app/[locale]/components/landing/projectCards/ProjectCards';

interface HeroProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HeroProps) {
  const { locale } = await params;
  return (
    <div className="relative">
      <Hero locale={locale} />
      <Profile />
      <ProjectCards />
    </div>
  );
}
