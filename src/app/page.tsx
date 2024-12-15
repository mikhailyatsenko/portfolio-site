import { Hero } from '@/components/landing/hero/Hero';
import { Skills } from '@/components/landing/skills/Skills';

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <Skills />
    </div>
  );
}
