import { ScrollTrackBlock } from '@/lib/ScrollTrackBlock';

import { LandingTranslationKeys } from '@/types/i18nTypes';

import './profileStyles.css';
import StickySection from './StickySection';
import { ProfileFeatures } from './ProfileFeatures';

interface ProfileProps {
  t: (key: LandingTranslationKeys) => string;
}

export const Profile = async ({ t }: ProfileProps) => {
  return (
    <ScrollTrackBlock id="profile">
      <div className="overlay left will-change-[clip-path]">
        <h2 className="mt-5 text-center text-3xl font-[150] h-sm:text-5xl md:text-6xl">
          {t('profile.title')}
        </h2>
      </div>

      <div className="overlay right will-change-[clip-path]">
        <h2 className="mt-5 text-center text-3xl font-[150] h-sm:text-5xl md:text-6xl">
          {t('profile.title')}
        </h2>
      </div>
      <StickySection>
        <section
          id="profile"
          className={`flex h-screen flex-col items-center gap-6 overflow-hidden pt-20 sm576:py-20`}
        >
          <ProfileFeatures t={t} />

          {/* <AnimateInView
            className="mx-auto mt-6 flex w-full justify-center transition-transform duration-300 [transform:_rotateX(90deg)]"
            activeClass="![transform:_rotateX(0deg)]"
            threshold={1}
          >
            <Link
              target="_blank"
              href={
                (await getLocale()) === 'de'
                  ? 'cv/CV_Yatsenko_de.pdf'
                  : 'cv/CV_Yatsenko_en.pdf'
              }
            >
              <DownloadButton>{t('profile.downloadCv')}</DownloadButton>
            </Link>
          </AnimateInView> */}
        </section>
      </StickySection>
    </ScrollTrackBlock>
  );
};
