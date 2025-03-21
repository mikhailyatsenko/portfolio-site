import cls from './Hero.module.css';
import ScrollDownIcon from '@/assets/icons/scroll-down-icon.svg?url';
import { AnimateInView } from '@/lib/AnimateInView';
import Image from 'next/image';
import LinkedInIcon from '@/assets/icons/linkedin-icon.svg';
import GithubIcon from '@/assets/icons/github-icon.svg';

import { LandingTranslationKeys } from '@/types/i18nTypes';
import { HeroAnimatedBg } from '@/app/clientComponents/heroAnimatedBg/HeroAnimatedBg';
import Link from 'next/link';

interface HeroProps {
  t: (key: LandingTranslationKeys) => string;
}

export const Hero = async ({ t }: HeroProps) => {
  return (
    <HeroAnimatedBg>
      <div className="gap-4.5 absolute inset-0 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="ml-1 w-fit md:ml-0 lg:mx-auto">
          <p
            className="h-0 text-left font-mono text-base opacity-0 sm:ml-2 sm:text-lg"
            aria-label="Hi! I'm fontend developer"
          >
            {t('hero.greeting')}
            &nbsp;<span className="border-r">Frontend Developer</span>
          </p>

          <p
            className="mb-1 animate-fadeIn text-left font-mono text-base opacity-0 [animation-delay:_1.5s] sm:ml-2 sm:text-lg"
            aria-label="Hi! I'm fontend developer"
          >
            {t('hero.greeting')}
            &nbsp;<span className={cls.typewriter}></span>
          </p>
        </div>
        <AnimateInView
          className="scale-110 opacity-0 transition duration-1000 ease-in-out"
          activeClass="!opacity-100 !scale-100 transition duration-1000 ease-in-out"
          resetOnExit
        >
          <h1 className="text-left text-5xl opacity-70 transition-opacity duration-700 ease-in-out hover:opacity-90 sm:text-7xl lg:text-center xl:text-8xl">
            {t('hero.tagline')}
          </h1>
        </AnimateInView>
        <div className="absolute bottom-5 left-0 mt-auto flex w-full animate-fadeIn flex-col items-center gap-7 text-center opacity-0 [animation-delay:_1.5s] h-sm:gap-14">
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/mikhailyatsenko"
              rel="noopener"
              aria-label="Linkedin"
            >
              <LinkedInIcon className="h-6 w-6 fill-foreground transition-colors hover:fill-slate-500" />
            </Link>
            <Link
              href="https://github.com/mikhailyatsenko/"
              rel="noopener"
              aria-label="Github"
            >
              <GithubIcon className="h-6 w-6 fill-foreground transition-colors hover:fill-slate-500" />
            </Link>
          </div>
          <Link href="#profile" aria-label="Profile">
            <Image
              src={ScrollDownIcon}
              className="mx-auto h-[40px] w-[40px] animate-bounce dark:invert-[90%]"
              alt={t('hero.scroll')}
            />
          </Link>
        </div>
      </div>
    </HeroAnimatedBg>
  );
};
