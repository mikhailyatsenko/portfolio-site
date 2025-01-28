import { ThemeToggler } from '@/app/clientComponents/ThemeToggler/ThemeToggler';
import { AnimateInView } from '@/lib/AnimateInView';
import { NavMenu } from '@/app/clientComponents/navMenu/NavMenu';
import LanguageChanger from '@/app/clientComponents/LanguageChanger';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="z-20 flex h-[70px] justify-center px-5 md:px-10">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <AnimateInView
        className="relative z-10 flex w-5/6 shrink-0 items-center opacity-0 duration-300 ease-in-out"
        activeClass="!opacity-100 !w-full"
      >
        <Link href="/" className="flex flex-col gap-0.5 p-2.5">
          <h2 className="font-mono uppercase">Mykhailo Yatsenko</h2>
          <div className="h-0 w-[calc(var(--scroll-progress-profile)*100%)] border-b-2 border-b-red-700 transition-[width] duration-150"></div>
        </Link>
        <div className="ml-auto flex items-center">
          <LanguageChanger />
          <ThemeToggler />
          <NavMenu />
        </div>
      </AnimateInView>
    </header>
  );
};
