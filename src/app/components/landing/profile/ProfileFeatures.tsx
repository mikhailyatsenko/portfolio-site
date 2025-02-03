import { LandingTranslationKeys } from '@/types/i18nTypes';
// import { GradientBlock } from '../../GradientBlock';
import cls from './ProfileFeatures.module.css';
import { techStackIconsData } from '@/lib/techStackIconsData';
import mishaPhoto from '@/assets/icons/me.webp';
import Image from 'next/image';
import Sunglasses from '@/assets/icons/sunglasses.svg';
import Link from 'next/link';

interface ProfileFeaturesProps {
  t: (key: LandingTranslationKeys) => string;
}

export const ProfileFeatures: React.FC<ProfileFeaturesProps> = ({ t }) => {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center h-sm:sm576:pt-[74px]`}
    >
      <div
        className={`${cls.firstScene} bottom-0 left-0 z-[2] flex w-screen flex-col flex-nowrap items-center justify-end h-sm:sm576:h-[calc(100vh-74px)] h-sm:sm576:justify-center`}
      >
        <div className={`${cls.photoMe} relative hidden h-sm:sm576:block`}>
          <Sunglasses
            className={`${cls.sunglasses} absolute left-6 top-[43px] z-[2] h-auto w-12`}
          />
          <Image
            src={mishaPhoto}
            width={100}
            height={100}
            alt={t('profile.photo_alt')}
            className="relative z-[1]"
          />
        </div>

        <div
          className={`${cls.aboutMe} relative mt-0 h-screen w-full overflow-hidden bg-yellow-300 px-20 py-5 pt-[74px] text-center text-foreground dark:bg-indigo-950 h-sm:sm576:mt-5 h-sm:sm576:h-auto h-sm:sm576:w-5/6 h-sm:sm576:rounded-3xl h-md:py-10 h-sm:lg:w-1/2`}
        >
          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <div className={`${cls.photoMe} relative block h-sm:sm576:hidden`}>
              <Sunglasses
                className={`${cls.sunglasses} absolute left-6 top-[43px] z-[2] h-auto w-12`}
              />
              <Image
                src={mishaPhoto}
                width={100}
                height={100}
                alt={t('profile.photo_alt')}
                className="relative z-[1]"
              />
            </div>
            <h3 className="font-display mt-2 font-mono text-xl sm576:h-sm:mt-0 h-md:text-3xl h-md:lg:text-4xl">
              {t('profile.hello')}
            </h3>
            <p className="text-mono mx-auto mt-4 max-w-full text-base h-md:text-lg">
              {t('profile.description')}
            </p>
            <div className="mx-auto mt-5 hidden justify-center h-sm:flex h-md:mt-12">
              <Link href="#projects">
                <div className="group relative flex h-12 w-48 items-center justify-center rounded-full bg-black text-white transition-all hover:w-48 sm576:w-12">
                  <span className="absolute opacity-0 transition-opacity group-hover:opacity-0 sm576:opacity-100">
                    →
                  </span>
                  <span className="absolute opacity-100 transition-opacity group-hover:opacity-100 sm576:opacity-0">
                    {t('profile.viewProjects')}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${cls.secodndScene} absolute bottom-0 left-0 flex h-[calc(100vh-74px)] w-screen flex-col items-center justify-center`}
      >
        <h3
          className={`${cls.techStack} relative z-[1] text-center text-2xl h-sm:sm576:text-3xl`}
        >
          {t('tech_stack.title')}
        </h3>
        <div
          className={`${cls.stackIcons} flex w-fit flex-wrap justify-center rounded-3xl px-5 py-10`}
        >
          {Object.entries(techStackIconsData).map(([key, tech]) => (
            <div
              key={key}
              className={`${cls.stackIcon} flex w-1/4 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 h-sm:w-1/3 sm:w-1/6`}
            >
              <tech.icon className="h-[40px] w-[40px] fill-foreground" />
              <h4>{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
