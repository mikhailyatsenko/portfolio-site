import cls from './Hero.module.css';

export const Hero = () => {
  return (
    <section className="h-screen-minus-nav mx-auto bg-gradient-to-br from-[#E3FDF5] to-[#FFE6FA] p-5 dark:from-[#1f1636] dark:to-[#090610]">
      {/* <h1 className="wrapper text-center text-5xl sm:text-8xl md:text-xl">
        Hi👋 I&apos;m Frontend Developer
      </h1> */}
      <div className="wrapper relative flex h-full flex-col items-center justify-center">
        <h1 className="md:text-10xl text-center text-5xl sm:text-8xl">
          Bringing Ideas to Life
        </h1>
        <h1 aria-label="Hi! I'm a developer">
          Hi👋! I&apos;m&nbsp;<span className={cls.typewriter}></span>
        </h1>
        <p className="absolute bottom-5 mt-auto h-6 w-6 animate-bounce">вниз</p>
      </div>
    </section>
  );
};
