import { ThemeToggle } from '@/components/ThemeToggler';

export const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center p-5">
      <h1 className="text-5xl sm:text-8xl md:text-8x bg-purple-700">
        FRONTEND DEVELOPER
      </h1>
      <h1 className="text-5xl sm:text-8xl md:text-8xl bg-red-500">
        FRONTEND DEVELOPER
      </h1>
      <h1 className="text-5xl sm:text-8xl md:text-8xl ">FRONTEND DEVELOPER</h1>
      <h1 className="text-5xl sm:text-8xl md:text-8xl ">FRONTEND DEVELOPER</h1>
      <ThemeToggle />
    </div>
  );
};
