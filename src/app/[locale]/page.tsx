import { Hero } from '@/app/[locale]/components/landing/hero/Hero';
import { Profile } from '@/app/[locale]/components/landing/profile/Profile';
import { ProjectCards } from '@/app/[locale]/components/landing/projectCards/ProjectCards';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Profile />
      <ProjectCards />
    </div>
  );
}
