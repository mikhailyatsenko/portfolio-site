import { Hero } from '@/components/landing/hero/Hero';
import { Profile } from '@/components/landing/profile/Profile';
import { ProjectCards } from '@/components/landing/projectCards/ProjectCards';

export default function Home() {
  return (
    <div>
      <Hero />
      <Profile />
      <ProjectCards />
    </div>
  );
}
