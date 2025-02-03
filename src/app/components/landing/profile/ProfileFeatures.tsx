import { LandingTranslationKeys } from '@/types/i18nTypes';
import { GradientBlock } from '../../GradientBlock';
import cls from './ProfileFeatures.module.css';
import { techStackIconsData } from '@/lib/techStackIconsData';
import mishaPhoto from '@/assets/icons/me.webp';
import Image from 'next/image';
import Sunglasses from '@/assets/icons/sunglasses.svg';

interface ProfileFeaturesProps {
  t: (key: LandingTranslationKeys) => string;
}

export const ProfileFeatures: React.FC<ProfileFeaturesProps> = ({ t }) => {
  return (
    <div
      className={`${cls.features} features relative flex h-full w-full flex-col items-center`}
    >
      <div
        className={`${cls.firstScene} z-[2] flex h-full w-full flex-col flex-nowrap items-center justify-end will-change-[transform,_scale,_opacity] sm576:justify-center`}
      >
        <div className={`${cls.photoMe} relative hidden h-sm:block`}>
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
        <GradientBlock
          title={t('profile.hello')}
          content={t('profile.description')}
          buttonText={t('profile.viewProjects')}
          className={`${cls.aboutMe} mt-0 will-change-[transform] h-sm:mt-4`}
        />
      </div>

      <div
        className={`${cls.secodndScene} absolute flex h-[calc(100vh-160px)] flex-col items-center justify-center`}
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
              className={`${cls.stackIcon} flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/6`}
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
