import { StackCards } from '@/components/common/stackCards/StackCards';
import { ProjectCard } from './projectCard/ProjectCard';

export const Projects = () => {
  const cardContents = [
    <div key="some projects">
      <h2 className="text-h2">Some projects</h2>
    </div>,

    <ProjectCard
      key={'1'}
      cardNr={1}
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
      detailsLink=""
    />,

    <ProjectCard
      key="2"
      cardNr={2}
      title='"3. Welle" - Berlin Coffee Shop Finder'
      description=" Fullstack application designed to help Berlin residents and visitors
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
      detailsLink=""
    />,
  ];
  return (
    <section className="px-8 py-6 md:px-14 md:py-16">
      <div className="min-h-min">
        <StackCards items={cardContents} />
      </div>
    </section>
  );
};
