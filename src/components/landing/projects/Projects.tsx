import { StackCards } from '@/components/common/stackCards/StackCards';
import { ProjectCard } from './projectCard/ProjectCard';

export const Projects = () => {
  const cardContent = [
    // <div
    //   key="some projects"
    //   className="relative flex gap-5 overflow-hidden rounded-xl bg-gradient-to-br from-[#e3fdf5] to-[#ffe6fa] px-6 py-9 shadow-md dark:from-[#1f1636] dark:to-[#090610] sm:px-10 md:gap-10 lg:px-20 lg:py-10"
    // >
    //   <h2 className="text-h2">
    //     This card has even more content to test the dynamic height handling. It
    //     includes multiple paragraphs, links, and other data This card has even
    //     more content to test the dynamic height handling. It includes multiple
    //     paragraphs, links, and other data This card has even more content to
    //     test the dynamic height handling. It includes multiple paragraphs,
    //     links, and other data This card has even more content to test the
    //     dynamic height handling. It includes multiple paragraphs, links, and
    //     other data This card has even more content to test the dynamic height
    //     handling. It includes multiple paragraphs, links, and other data This
    //     card has even more content to test the dynamic height handling. It
    //     includes multiple paragraphs, links, and other data
    //   </h2>
    // </div>,

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

  const cards = [
    {
      title: 'Short Card',
      content: 'This is a short card with very little text.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      title: 'Medium Card',
      content: "This card has slightly more text. It's a medium-length card.",
      linkText: 'Learn More',
      linkHref: '#',
    },
    {
      title: 'Long Card',
      content:
        'This is a long card with a lot of content. It might have several paragraphs, images, or other elements inside.',
      linkText: 'Explore',
      linkHref: '#',
    },
    {
      title: 'Extra Long Card',
      content:
        'This card has even more content to test the dynamic height handling. It includes multiple paragraphs, links, and other data.',
      linkText: 'Discover',
      linkHref: '#',
    },
  ];

  return (
    <section className="px-8 py-6 md:px-14 md:py-16">
      <div className="bg-gray-100 p-8">
        <StackCards>{cardContent}</StackCards>
      </div>
    </section>
  );
};
