import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { NavMenu } from './navMenu/NavMenu';

export const Header = () => {
  return (
    <header className="z-20 flex h-[70px] px-5 md:px-10">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <div className="relative z-10 flex w-full items-center">
        <div className="flex flex-col gap-0.5 p-2.5">
          <h2 className="font-serif text-h4 leading-[1]">Mykhailo Yatsenko</h2>
        </div>
        <ThemeToggler />
        <NavMenu />
      </div>
    </header>
  );
};
