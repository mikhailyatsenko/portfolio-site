import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { AnimateInView } from './AnimateInView';
import { NavMenu } from './navMenu/NavMenu';

export const Header = () => {
  return (
    <header className="z-20 flex h-[70px] justify-center px-5 md:px-10">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <AnimateInView
        className="relative z-10 flex w-5/6 shrink-0 items-center opacity-0 duration-300 ease-in-out"
        activeClass="!opacity-100 !w-full"
      >
        <div className="flex flex-col gap-0.5 p-2.5">
          <h2 className="font-mono uppercase">Mykhailo Yatsenko</h2>
          <div className="h-0 w-[calc(var(--scroll-progress-profile)*100%)] border-b-2 border-b-red-700 transition-[width] duration-150"></div>
        </div>
        <ThemeToggler />
        <NavMenu />
      </AnimateInView>
    </header>
  );
};
