import { StackCards } from '@/components/common/stackCards/StackCards';
import { ProjectCard } from './projectCard/ProjectCard';

import slide3Welle from '@/assets/projectsSlides/project-1-slide-1.webp';
import slideBvg from '@/assets/projectsSlides/project-2-slide-1.webp';
import slideEncrypt from '@/assets/projectsSlides/project-3-slide-1.webp';
import { AnimateInView } from '@/components/common/AnimateInView';
// import { ScrollTrackBlock } from '@/components/common/ScrollTrackBlock';

export const Projects = () => {
  const cardContent = [
    <ProjectCard
      key={'1'}
      slide={slide3Welle}
      title='"3. Welle" - Berlin Coffee Shop Finder'
      description="Fullstack application designed to help Berlin residents and visitors
          discover the best specialty coffee shops in the city. Users can
          explore a map of coffee shops, read and leave reviews, and find
          essential information about each location."
      link="https://3welle.com"
      linkText="3welle.com"
      featuresList={[
        'Map Integration: View coffee shops on an interactive map.',
        'Interactive page: Detailed page with reviews and ratings for each coffee shop.',
        'User Reviews: Read and submit reviews for each coffee shop.',
        'Rating System: Rate your favorite coffee shops.',
        'Authentication: Google and E-mail authentication.',
        'Responsive Design: Optimized for both desktop and mobile devices.',
      ]}
      detailsLink="welle"
    />,

    <ProjectCard
      key="2"
      slide={slideBvg}
      title='"BVG App" - Berlin Public Transport App'
      description="Application designed to help Berlin residents and visitors"
      link="https://mikhailyatsenko.github.io/bvg-app-ts"
      linkText="mikhailyatsenko.github.io/bvg-app-ts"
      featuresList={[
        'Map Integration: View coffee shops on an interactive map.',
        'Interactive page: Detailed page with reviews and ratings for each coffee shop.',
        'User Reviews: Read and submit reviews for each coffee shop.',
        'Rating System: Rate your favorite coffee shops.',
        'Authentication: Google and E-mail authentication.',
        'Responsive Design: Optimized for both desktop and mobile devices.',
      ]}
      detailsLink="bvg"
    />,

    <ProjectCard
      key="3"
      slide={slideEncrypt}
      title='"Encrypt notes" - Short message encryption service'
      description="This is a fullstack application designed for encrypting short notes."
      link="https://mikhailyatsenko.github.io/encryptnotes"
      linkText="mikhailyatsenko.github.io/encryptnotes"
      featuresList={[
        'Map Integration: View coffee shops on an interactive map.',
        'Interactive page: Detailed page with reviews and ratings for each coffee shop.',
        'User Reviews: Read and submit reviews for each coffee shop.',
        'Rating System: Rate your favorite coffee shops.',
        'Authentication: Google and E-mail authentication.',
        'Responsive Design: Optimized for both desktop and mobile devices.',
      ]}
      detailsLink="encryptnotes"
    />,
  ];

  return (
    // <ScrollTrackBlock id="proj">
    <section id="projects" className="relative px-8 py-7 md:px-14 md:py-16">
      <AnimateInView>
        <h2 className="mb-10 text-center text-5xl font-[150] md:text-6xl">
          Some projects
        </h2>
      </AnimateInView>
      <StackCards>{cardContent}</StackCards>
    </section>
    // </ScrollTrackBlock>
  );
};
