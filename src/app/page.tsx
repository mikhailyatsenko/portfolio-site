import { Contacts } from '@/components/landing/contacts/Contacts';
import { Hero } from '@/components/landing/hero/Hero';
import { Profile } from '@/components/landing/profile/Profile';
import { ProjectCards } from '@/components/landing/projectCards/ProjectCards';
// import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <div className="relative">
      <div
        className="relative z-[2] bg-background shadow-sm h-sm:mb-[30rem] sm576:h-sm:mb-96"
        id="main-content"
      >
        <Hero />
        <Profile />
        <ProjectCards />
      </div>
      <div className="relative bottom-0 z-[1] h-fit w-full h-sm:fixed h-sm:h-[30rem] sm576:h-sm:h-96">
        <Contacts />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
