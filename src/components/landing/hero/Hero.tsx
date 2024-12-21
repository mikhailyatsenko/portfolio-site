import cls from './Hero.module.css';
import ScrollDownIcon from '@/assets/icons/scroll-down-icon.svg';

export const Hero = () => {
  return (
    <section className="mx-auto mt-[74px] h-screen-minus-nav animate-fadeIn snap-end snap-always bg-gradient-to-br from-[#e3fdf5] to-[#ffe6fa] p-5 dark:from-[#1f1636] dark:to-[#090610] md:p-10">
      <div className="wrapper relative flex h-full max-w-fit flex-col justify-center">
        <h4
          className="mb-1 ml-1.5 animate-[fadeIn_500ms_linear_2000ms_forwards] text-left font-mono text-base opacity-0 sm:ml-2 sm:text-lg"
          aria-label="Hi! I'm fontend developer"
        >
          Hi👋! I&apos;m&nbsp;<span className={cls.typewriter}></span>
        </h4>

        <div className={cls.heroTitle}>
          <h1 className="animate-[fadeIn_2000ms_linear_500ms_forwards] text-left text-5xl opacity-0 delay-[1000ms] duration-[1000ms] ease-linear sm:text-7xl lg:text-center xl:text-8xl">
            Bringing Ideas to Life
          </h1>
        </div>

        <div className="absolute bottom-5 left-0 mt-auto w-full animate-[fadeIn_3000ms_linear_500ms_forwards] text-center opacity-0">
          <ScrollDownIcon className="mx-auto block animate-bounce" />
        </div>
      </div>
    </section>
  );
};
