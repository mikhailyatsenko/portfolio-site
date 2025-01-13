import { StackCards } from '@/components/common/stackCards/StackCards';
import { ProjectCard } from './projectCard/ProjectCard';

import slide3Welle from '@/assets/projectsSlides/project-1-slide-1.webp';
import slideBvg from '@/assets/projectsSlides/project-2-slide-1.webp';
import slideEncrypt from '@/assets/projectsSlides/project-3-slide-1.webp';
import { AnimateInView } from '@/components/common/AnimateInView';
import { ScrollTrackBlock } from '@/components/common/ScrollTrackBlock';

export const ProjectCards = () => {
  const cardContent = [
    <ProjectCard
      key={'1'}
      slide={slide3Welle}
      title='"3. Welle" - Berlin Coffee Shop Finder'
      badges={['Fullstack', 'Responsive', 'FSD Architecture']}
      description="Fullstack application designed to help Berlin residents and visitors
          discover the best specialty coffee shops in the city. Users can
          explore a map of coffee shops, read and leave reviews, and find
          essential information about each location."
      link="https://3welle.com"
      linkText="3welle.com"
      detailsLink="welle"
    />,

    <ProjectCard
      key="2"
      slide={slideBvg}
      title='"BVG App" - Berlin Public Transport App'
      badges={['SPA', 'Responsive', 'FSD Architecture']}
      description="This application designed for viewing real-time arrival times of public transport at stops in Berlin and Brandenburg"
      link="https://mikhailyatsenko.github.io/bvg-app-ts"
      linkText="mikhailyatsenko.github.io/bvg-app-ts"
      detailsLink="bvg"
    />,

    <ProjectCard
      key="3"
      slide={slideEncrypt}
      title='"Encrypt notes" - Short message encryption service'
      badges={['SPA', 'Responsive']}
      description="This is a fullstack application designed for encrypting short notes."
      link="https://mikhailyatsenko.github.io/encryptnotes"
      linkText="mikhailyatsenko.github.io/encryptnotes"
      detailsLink="encryptnotes"
    />,
  ];

  return (
    <ScrollTrackBlock id="proj">
      <section id="projects" className="relative px-8 py-7 md:px-14 md:py-16">
        <AnimateInView>
          <h2 className="mb-10 text-center text-5xl font-[150] md:text-6xl">
            Some projects
          </h2>
        </AnimateInView>
        <StackCards>{cardContent}</StackCards>
      </section>
    </ScrollTrackBlock>
  );
};
