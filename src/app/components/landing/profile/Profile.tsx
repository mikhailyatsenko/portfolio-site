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
      <StickySection>
        <section
          id="profile"
          className={`flex h-screen flex-col items-center gap-6 overflow-hidden`}
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
