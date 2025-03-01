import { StackCards } from '@/app/clientComponents/StackCards';
import { ProjectCard } from './projectCard/ProjectCard';

import slide3Welle from '@/assets/projectsSlides/project-1-slide-1.webp';
import slideBvg from '@/assets/projectsSlides/project-2-slide-1.webp';
import slideEncrypt from '@/assets/projectsSlides/project-3-slide-1.webp';
import slideEisenhower from '@/assets/projectsSlides/project-4-slide-1.webp';

import { AnimateInView } from '@/lib/AnimateInView';
import { LandingTranslationKeys } from '@/types/i18nTypes';

interface ProfileProps {
  t: (key: LandingTranslationKeys) => string;
}

export const Projects = ({ t }: ProfileProps) => {
  const cardContent = [
    <ProjectCard
      key={t('projects.welle.title')}
      slide={slide3Welle}
      title={t('projects.welle.title')}
      badges={['Fullstack', 'Responsive', 'FSD Architecture']}
      description={t('projects.welle.description')}
      link="https://3welle.com"
      linkText="3welle.com"
      detailsLink="welle"
    />,

    <ProjectCard
      key={t('projects.bvg.title')}
      slide={slideBvg}
      title={t('projects.bvg.title')}
      badges={['SPA', 'Responsive', 'FSD Architecture']}
      description={t('projects.bvg.description')}
      link="https://mikhailyatsenko.github.io/bvg-app-ts"
      linkText="mikhailyatsenko.github.io/bvg-app-ts"
      detailsLink="bvg"
    />,

    <ProjectCard
      key={t('projects.eisenhower.title')}
      slide={slideEisenhower}
      title={t('projects.eisenhower.title')}
      badges={['Fullstack', 'Responsive', 'SPA']}
      description={t('projects.eisenhower.description')}
      link="https://eisenhower-psi.vercel.app"
      linkText="eisenhower-psi.vercel.app"
      detailsLink="eisenhower"
    />,

    <ProjectCard
      key={t('projects.encryptnotes.title')}
      slide={slideEncrypt}
      title={t('projects.encryptnotes.title')}
      badges={['Fullstack', 'Responsive', 'SPA']}
      description={t('projects.encryptnotes.description')}
      link="https://mikhailyatsenko.github.io/encryptnotes"
      linkText="mikhailyatsenko.github.io/encryptnotes"
      detailsLink="encryptnotes"
    />,
  ];

  return (
    <section id="projects" className="relative px-8 py-20 pb-28 md:px-14">
      <AnimateInView>
        <h2 className="mb-10 text-center text-5xl font-[150] md:text-6xl">
          {t('projects.title')}
        </h2>
      </AnimateInView>
      <StackCards cardsArray={cardContent} />
      <div className="h-0 w-0 opacity-0" id="contacts"></div>
    </section>
  );
};
