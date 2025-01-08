import { Hero } from '@/components/landing/hero/Hero';
import { Profile } from '@/components/landing/profile/Profile';
import { Projects } from '@/components/landing/projects/Projects';

export default function Home() {
  return (
    <div>
      <Hero />
      <Profile />

      <Projects />
    </div>
  );
}
