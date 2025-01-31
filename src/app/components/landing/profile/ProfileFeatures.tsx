import { LandingTranslationKeys } from '@/types/i18nTypes';
import { GlowingBlock } from '../../GlowingBlock';
import cls from './ProfileFeatures.module.css';
import { techStackIconsData } from '@/lib/techStackIconsData';

interface ProfileFeaturesProps {
  t: (key: LandingTranslationKeys) => string;
}

export const ProfileFeatures: React.FC<ProfileFeaturesProps> = ({ t }) => {
  return (
    <div
      className={`${cls.features} features relative flex h-full w-full flex-col items-center`}
    >
      <h3 className={`${cls.stackTitle} relative z-[1] text-center text-3xl`}>
        {t('tech_stack.title')}
      </h3>
      <div
        className={`${cls.firstScene} absolute top-8 z-[2] flex h-full w-full items-center justify-center`}
      >
        <GlowingBlock className={`${cls.aboutMe} `}>
          <h3 className="my-2 font-mono text-lg font-bold lg:text-xl">
            {t('profile.hello')}
          </h3>
          <p className="font-mono lg:text-lg">{t('profile.description')}</p>
        </GlowingBlock>
        {/* <div className="item">This is some large text.</div>
        <div className="item">This is some large text.</div>
        <div className="item">This is some large text.</div>
        <div className="item">This is some large text.</div>
        <div className="item">This is some small text.</div> */}
      </div>

      <div
        className={`${cls.secodnScene} absolute top-8 flex items-center justify-center`}
      >
        <div
          className={`${cls.stackIcons} flex w-fit flex-wrap justify-center`}
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
