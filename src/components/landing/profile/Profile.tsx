// import ExpressIcon from './icons/express.svg';
// import GithubIcon from './icons/github.svg';
import GraphqlIcon from './icons/graphql.svg';
import JavascriptIcon from './icons/javascript.svg';
import NextIcon from './icons/next.svg';
import NodeIcon from './icons/node.svg';
import ReactIcon from './icons/react.svg';
import ReduxIcon from './icons/redux.svg';
import TailwindIcon from './icons/tailwind.svg';
import TypescriptIcon from './icons/typescript.svg';
import ViteIcon from './icons/vite.svg';
import WebpackIcon from './icons/webpack.svg';
import mishaPhoto from './icons/me.webp';
import Image from 'next/image';
import cls from './Profile.module.css';
import { ScrollTrackBlock } from '@/components/common/ScrollTrackBlock';

export const Profile = () => {
  return (
    <section className="overflow-hidden bg-[linear-gradient(to_right,#bfbfbf_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf_1px,transparent_1px)] bg-[size:70px_70px] px-8 py-6 dark:bg-[linear-gradient(to_right,#575757_1px,transparent_1px),linear-gradient(to_bottom,#575757_1px,transparent_1px)] md:px-14 md:py-16">
      <ScrollTrackBlock id="profile">
        <h2 className="text-center text-5xl font-[150] md:text-6xl">Profile</h2>
        <div className={cls.colorDiv}></div>
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
          <div className="flex w-1/5 items-center justify-center">
            <JavascriptIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <TypescriptIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <ReactIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <ReduxIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <NextIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <GraphqlIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <NodeIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <ViteIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <WebpackIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <TailwindIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div>
          {/* <div className="flex w-1/5 items-center justify-center">
            <GithubIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" />
          </div> */}
          {/* <ExpressIcon className="h-[40px] w-[40px] fill-[var(--foreground)]" /> */}
        </div>
      </ScrollTrackBlock>
    </section>
  );
};
