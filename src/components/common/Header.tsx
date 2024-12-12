import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { NavMenu } from './navMenu/NavMenu';

export const Header = () => {
  return (
    <header className="flex px-10 md:px-20">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex flex-col gap-0.5 bg-purple-900 p-2.5">
          <h2 className="font-serif text-h4 leading-[1]">Mykhailo</h2>
          <h2 className="font-serif text-h4 leading-[1]">Yatsenko</h2>
        </div>
        <NavMenu />
      </div>
      <ThemeToggler />
    </header>
  );
};
