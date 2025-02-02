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
      <div className="overlay left">
        <h1>Profile</h1>
      </div>

      <div className="overlay right">
        <h1>Profile</h1>
      </div>
      <StickySection>
        <section
          id="profile"
          className={`flex h-screen flex-col items-center gap-6 overflow-hidden pt-20 sm576:py-20`}
        >
          <h2 className="text-center text-5xl font-[150] md:text-6xl">
            {t('profile.title')}
          </h2>

          <ProfileFeatures t={t} />
          {/* <div
            className={`${cls.aboutMeScrollTransform} mx-auto mt-5 flex shrink-0 flex-col items-center gap-5 sm576:flex-row lg:w-3/4`}
          >
            <Image
              src={mishaPhoto}
              width={100}
              height={100}
              alt={t('profile.photo_alt')}
              className={`h-[100px] w-[100px]`}
            />
            <div className={`relative cursor-pointer dark:text-white`}>
              <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500 dark:bg-gray-200"></span>
              <div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 transition duration-500 hover:scale-105 dark:border-gray-300 dark:bg-gray-800">
                <div className="flex items-center">
                  <span className="text-xl">😎</span>
                  <h3 className="my-2 ml-3 font-mono text-lg font-bold text-gray-800 dark:text-white">
                    {t('profile.hello')}
                  </h3>
                </div>
                <p className="font-mono text-gray-600 dark:text-gray-300">
                  {t('profile.description')}
                </p>
              </div>
            </div>
          </div>

          <div className={`relative mx-auto mt-6 w-fit dark:text-white`}>
            <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500 dark:bg-gray-200"></span>
            <div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 transition duration-500 hover:scale-105 dark:border-gray-300 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-center">
                  <h3 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                    {t('tech_stack.title')}
                  </h3>
              </div>
              <div className="flex w-fit flex-wrap justify-center">
                {Object.entries(techStackIconsData).map(([key, tech]) => (
                  <div
                    key={key}
                    className="flex w-1/3 shrink-0 flex-col flex-wrap items-center justify-center gap-1 py-3 transition duration-200 hover:scale-110 sm:w-1/6"
                  >
                    <tech.icon className="h-[40px] w-[40px] fill-foreground" />
                    <h4>{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <AnimateInView
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
