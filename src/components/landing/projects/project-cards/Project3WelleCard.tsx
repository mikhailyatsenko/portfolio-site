import { MockIphone } from '@/components/common/MockIphone';
import Image from 'next/image';
import slide from '../../../../assets/projectsSlides/project-1-slide-1.webp';

export const Project3WelleCard = () => {
  return (
    <div
      className="relative flex h-screen-minus-nav gap-5 overflow-hidden rounded-xl bg-gradient-to-br from-[#e3fdf5] to-[#ffe6fa] px-10 py-9 shadow-md dark:from-[#1f1636] dark:to-[#090610] md:gap-10 lg:px-20 lg:py-10"
      key={'2'}
    >
      <MockIphone
        screenContent={<Image src={slide} alt="Project 3.Welle card" />}
      />

      <div className="sm576:z-auto z-[2] grow-0 overflow-y-auto">
        <h3 className="mb-3 text-balance text-xl font-bold md:text-h3">
          3. Welle - Berlin Coffee Shop Explorer
        </h3>
        <a
          className="font-bold"
          href="https://3welle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'🔗 3welle.com'}
        </a>

        <div className="mt-6">
          Fullstack application designed to help Berlin residents and visitors
          discover the best specialty coffee shops in the city. Users can
          explore a map of coffee shops, read and leave reviews, and find
          essential information about each location.
        </div>

        <div className="mt-4">
          <h4 className="text-xl md:text-h4">Features </h4>
          <ul className="ml-4 list-disc md:ml-6">
            <li>Map Integration: View coffee shops on an interactive map.</li>
            <li>
              Interactive page: Detailed page with reviews and ratings for each
              coffee shop.
            </li>
            <li>User Reviews: Read and submit reviews for each coffee shop.</li>
            <li>Rating System: Rate your favorite coffee shops.</li>
            <li>Authentication: Google and E-mail authentication.</li>
            <li>
              Responsive Design: Optimized for both desktop and mobile devices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
