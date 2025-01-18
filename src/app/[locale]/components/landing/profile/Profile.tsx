// import ExpressIcon from './icons/express.svg';
// import GithubIcon from './icons/github.svg';
import { techStackIconsData } from '@/lib/techStackIconsData';
import mishaPhoto from '@/assets/icons/me.webp';
import Image from 'next/image';
import cls from './Profile.module.css';
import { ScrollTrackBlock } from '@/lib/ScrollTrackBlock';
import { AnimateInView } from '@/lib/AnimateInView';

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
        <div className="mx-auto mt-5 flex shrink-0 flex-col items-center gap-5 sm576:flex-row lg:w-3/4">
          <Image
            src={mishaPhoto}
            width={100}
            height={100}
            alt="Photo of Mykhailo Yatsenko"
            className={`${cls.photoScrollTransform} h-[100px] w-[100px] rotate-2 transition-transform duration-150 ease-in-out hover:rotate-0`}
          />
          <div
            className={`${cls.aboutMeScrollTransform} relative cursor-pointer dark:text-white`}
          >
            <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500 dark:bg-gray-200"></span>
            <div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 transition duration-500 hover:scale-105 dark:border-gray-300 dark:bg-gray-800">
              <div className="flex items-center">
                {/* <span className="text-xl">😎</span> */}
                <h3 className="my-2 ml-3 font-mono text-lg font-bold text-gray-800 dark:text-white">
                  Hello world!
                </h3>
              </div>
              <p className="font-mono text-gray-600 dark:text-gray-300">
                I build modern, fast, and responsive web applications with a
                focus on user experience and functionality. My goal is to create
                digital products that are both visually appealing and highly
                effective.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${cls.skillsScrollTransform} relative mx-auto mt-6 w-fit dark:text-white`}
        >
          <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500 dark:bg-gray-200"></span>
          <div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 transition duration-500 hover:scale-105 dark:border-gray-300 dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-center">
              {/* <span className="text-xl">😎</span> */}
              <h3 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                My Tech Stack
              </h3>
            </div>
            <div className="flex w-fit flex-wrap justify-center">
              {Object.entries(techStackIconsData).map(([key, tech]) => (
                <div
                  key={key}
                  className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/5"
                >
                  <tech.icon className="h-[40px] w-[40px] fill-foreground" />
                  <h4>{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollTrackBlock>
    </section>
  );
};
