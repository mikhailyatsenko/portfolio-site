import { LandingTranslationKeys } from '@/types/i18nTypes';
import { GlowingBlock } from '../../GlowingBlock';
import cls from './ProfileFeatures.module.css';

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
        className={`${cls.firstScene} z-[2] flex h-full w-full items-center justify-center`}
      >
        <GlowingBlock className={cls.aboutMe}>
          <h3 className="my-2 font-mono text-lg font-bold text-gray-800 dark:text-white">
            {t('profile.hello')}
          </h3>
          <p className="font-mono text-gray-600 dark:text-gray-300">
            {t('profile.description')}
          </p>
        </GlowingBlock>
        {/* <div className="item">This is some large text.</div>
        <div className="item">This is some large text.</div>
        <div className="item">This is some large text.</div>
        <div className="item">This is some large text.</div>
        <div className="item">This is some small text.</div> */}
      </div>
    </div>
  );
};
