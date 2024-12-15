import cls from './Hero.module.css';

export const Hero = () => {
  return (
    <section className="h-screen-minus-nav mx-auto mt-[74px] snap-end snap-always bg-gradient-to-br from-[#E3FDF5] to-[#FFE6FA] p-5 dark:from-[#1f1636] dark:to-[#090610]">
      {/* <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', height: 'calc(100vh - 74px)' }}
      >
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#polka-dots)"
        ></rect>
      </svg> */}
      <div className="wrapper relative flex h-full max-w-fit flex-col justify-center">
        <h4
          className="mb:1 ml-1.5 text-left font-mono text-base sm:ml-2 sm:text-lg"
          aria-label="Hi! I'm fontend developer"
        >
          Hi👋! I&apos;m&nbsp;<span className={cls.typewriter}></span>
        </h4>

        <div className={cls['split-text-container']}>
          <h2
            className={`text-left text-5xl sm:text-7xl lg:text-center xl:text-8xl ${cls.heroTitle}`}
          >
            <span className={`${cls['text-part']} ${cls.left}`}>
              Bringing Ideas&nbsp;
            </span>
            <span className={`${cls['text-part']} ${cls.right}`}>to Life</span>
          </h2>
        </div>

        <p className="absolute bottom-5 mt-auto h-6 w-6 animate-bounce text-center">
          вниз
        </p>
      </div>
    </section>
  );
};
