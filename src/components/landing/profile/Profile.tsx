// import ExpressIcon from './icons/express.svg';
// import GithubIcon from './icons/github.svg';
import GraphqlIcon from '@/assets/icons/stackIcons/graphql.svg';
import JavascriptIcon from '@/assets/icons/stackIcons/javascript.svg';
import NextIcon from '@/assets/icons/stackIcons/next.svg';
import NodeIcon from '@/assets/icons/stackIcons/node.svg';
import ReactIcon from '@/assets/icons/stackIcons/react.svg';
import ReduxIcon from '@/assets/icons/stackIcons/redux.svg';
import TailwindIcon from '@/assets/icons/stackIcons/tailwind.svg';
import TypescriptIcon from '@/assets/icons/stackIcons/typescript.svg';
import ViteIcon from '@/assets/icons/stackIcons/vite.svg';
import WebpackIcon from '@/assets/icons/stackIcons/webpack.svg';
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
            <Image
              src={JavascriptIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Javascript Icon"
            />
            <h4>Javascript</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={TypescriptIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Typescript Icon"
            />
            <h4>Typescript</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={ReactIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="React Icon"
            />
            <h4>React</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={ReduxIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Redux Icon"
            />
            <h4>Redux</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={NextIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Next Icon"
            />
            <h4>Next.js</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={GraphqlIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Graphql Icon"
            />
            <h4>GraphQL</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={NodeIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Node Icon"
            />
            <h4>Node.js</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={ViteIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Vite Icon"
            />
            <h4>Vite</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={WebpackIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Webpack Icon"
            />
            <h4>Webpack</h4>
          </div>
          <div className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5">
            <Image
              src={TailwindIcon}
              className="h-[40px] w-[40px] dark:invert-[90%]"
              alt="Tailwind Icon"
            />
            <h4>Tailwind CSS</h4>
          </div>
        </div>
      </ScrollTrackBlock>
    </section>
  );
};
