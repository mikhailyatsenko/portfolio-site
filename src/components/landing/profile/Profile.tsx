// import ExpressIcon from './icons/express.svg';
// import GithubIcon from './icons/github.svg';
import { techStackIconsData } from '@/lib/techStackIconsData';
import mishaPhoto from '@/assets/icons/me.webp';
import Image from 'next/image';
import cls from './Profile.module.css';
import { ScrollTrackBlock } from '@/components/common/ScrollTrackBlock';
import { AnimateInView } from '@/components/common/AnimateInView';

export const Profile = () => {
  return (
    <section
      id="profile"
      className="overflow-hidden bg-[linear-gradient(to_right,#bfbfbf_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf_1px,transparent_1px)] bg-[size:70px_70px] px-8 py-6 dark:bg-[linear-gradient(to_right,#575757_1px,transparent_1px),linear-gradient(to_bottom,#575757_1px,transparent_1px)] md:px-14 md:py-16"
    >
      <ScrollTrackBlock id="profile">
        <AnimateInView>
          <h2 className="text-center text-5xl font-[150] md:text-6xl">
            Profile
          </h2>
        </AnimateInView>
        {/* <div className={cls.colorDiv}></div> */}
        <div className="mx-auto mt-5 flex shrink-0 items-center gap-5 md:w-2/4">
          <Image
            src={mishaPhoto}
            width={100}
            height={100}
            alt="Photo of Mykhailo Yatsenko"
            className={`${cls.photoScrollTransform} h-[100px] w-[100px] rotate-2 transition-transform duration-150 ease-in-out hover:rotate-0`}
          />
          <div
            className={`${cls.aboutMeScrollTransform} border-2 border-[var(--foreground)] bg-background p-5`}
          >
            I build modern, fast, and responsive web applications with a focus
            on user experience and functionality. My goal is to create digital
            products that are both visually appealing and highly effective.
          </div>
        </div>

        <div
          className={`${cls.skillsScrollTransform} mx-auto mt-6 flex w-fit flex-wrap justify-center border-2 border-[var(--foreground)] bg-background p-4`}
        >
          <div className="w-full">
            <h4 className="mb-4 text-center font-mono text-xl font-medium">
              Tech Stack
            </h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.javascript.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.javascript.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.typescript.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.typescript.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.react.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.react.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.redux.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.redux.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.next.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.next.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.graphql.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.graphql.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.node.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.node.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.vite.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.vite.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.webpack.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.webpack.name}</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <techStackIconsData.tailwind.icon className="h-[40px] w-[40px] fill-foreground" />
            <h4>{techStackIconsData.tailwind.name}</h4>
          </div>
        </div>
      </ScrollTrackBlock>
    </section>
  );
};
