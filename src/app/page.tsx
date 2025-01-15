import { Contacts } from '@/components/landing/contacts/Contacts';
import { Hero } from '@/components/landing/hero/Hero';
import { Profile } from '@/components/landing/profile/Profile';
import { ProjectCards } from '@/components/landing/projectCards/ProjectCards';
// import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <div className="relative">
      <div
        className="relative z-10 z-[2] mb-[60vh] bg-background shadow-sm"
        id="main-content"
      >
        <Hero />
        <Profile />
        <ProjectCards />
      </div>
      <div className="fixed bottom-0 z-[1] h-[60vh] w-full">
        <Contacts />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
