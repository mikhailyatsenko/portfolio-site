import cls from './Hero.module.css';
import ScrollDownIcon from '@/assets/icons/scroll-down-icon.svg?url';
import { AnimateInView } from '@/components/common/AnimateInView';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-auto w-full">
      {/* Hero Section */}
      <div
        className="mask-image-[radial-gradient(ellipse_at_100%_0%,black_40%,transparent_70%)] relative flex min-h-screen w-full items-center justify-center bg-stripes-rainbow bg-[length:200%_100%] bg-center blur-[10px] invert-[100%] dark:filter-opacity-saturate"
        style={{
          maskImage:
            'radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)',
        }}
      >
        {/* Animated Overlay */}
        <div className="absolute inset-0 animate-smoothBg bg-stripes-rainbow bg-[length:200%_100%] mix-blend-difference" />
      </div>

      {/* Content Section */}
      <div className="contentWrapper gap-4.5 absolute inset-0 flex flex-col items-center justify-center text-center mix-blend-difference invert dark:filter-none">
        <AnimateInView
          className="scale-105 opacity-0 transition duration-1000 ease-in-out"
          activeClass="!opacity-100 !scale-100 transition duration-1000 ease-in-out"
          resetOnExit
        >
          <h4
            className="mb-1 ml-1.5 animate-fadeIn place-self-start text-left font-mono text-base opacity-0 [animation-delay:_1.5s] sm:ml-2 sm:text-lg"
            aria-label="Hi! I'm fontend developer"
          >
            Hi👋! I&apos;m&nbsp;<span className={cls.typewriter}></span>
          </h4>

          <h1 className="text-left text-5xl sm:text-7xl lg:text-center xl:text-8xl">
            Bringing Ideas to Life
          </h1>
        </AnimateInView>
        <div className="absolute bottom-5 left-0 mt-auto w-full animate-fadeIn text-center opacity-0 [animation-delay:_1.5s]">
          <a href="#profile">
            <Image
              src={ScrollDownIcon}
              className="mx-auto h-[40px] w-[40px] animate-bounce dark:invert-[90%]"
              alt="Scroll down"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
