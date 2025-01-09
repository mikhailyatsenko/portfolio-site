import encryptMainImg from '@/assets/projectFeatures/encrypnt-desktop.webp';
import welleMainImg from '@/assets/projectFeatures/3welle-main.webp';
import fullstackAppImg from '@/assets/projectFeatures/fullstack-app.svg?url';
import speedImg from '@/assets/projectFeatures/speed.svg?url';
import mapIcon from '@/assets/projectFeatures/map-icon.svg?url';
import bvgMainImg from '@/assets/projectFeatures/bvg-main.webp';
import reviewImg from '@/assets/projectFeatures/review.svg?url';
import responsiveImg from '@/assets/projectFeatures/responsive.svg?url';
import accountImg from '@/assets/projectFeatures/account.svg?url';
import { TechStackIconKey } from './techStackIconsData';
import { StaticImageData } from 'next/image';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
  mainImg: StaticImageData;
  techStack: TechStackIconKey[];
  features: {
    title: string;
    description: JSX.Element;
    img: StaticImageData;
  }[][];
}

export type ProjectIds = 'encryptnotes' | 'welle' | 'bvg';

export type ProjectsData = Record<ProjectIds, ProjectData>;

export const projectsData: ProjectsData = {
  encryptnotes: {
    id: 'encriptnotes',
    title: 'Encrypt Notes App',
    description:
      'This is a fullstack application designed for encrypting short notes.',
    liveLink: 'https://mikhailyatsenko.github.io/encryptnotes',
    sourceLink: 'https://github.com/mikhailyatsenko/encryptnotes',
    mainImg: encryptMainImg,
    techStack: ['react', 'typescript', 'vite', 'node'],
    features: [
      [
        {
          title: 'Responsive design',
          description: (
            <p>The app is designed to be responsive and work on all devices.</p>
          ),
          img: responsiveImg,
        },
        {
          title: 'Fullstack application',
          description: (
            <p>
              The app is built with React.js, Node.js and PostgreSQL. You can
              access the backend{' '}
              <a
                className="font-bold"
                href="https://github.com/mikhailyatsenko/berlin-coffee-backend"
              >
                here
              </a>
              .
            </p>
          ),
          img: fullstackAppImg,
        },
      ],
      [
        {
          title: 'Performance',
          description: (
            <p>
              The project is lightweight and fairly simple, avoiding the use of
              heavy libraries, which ensures fast performance.
            </p>
          ),
          img: speedImg,
        },
        {
          title: 'Fullstack application',
          description: (
            <p>The app is built with React.js, Node.js and PostgreSQL.</p>
          ),

          img: fullstackAppImg,
        },
      ],
    ],
  },

  welle: {
    id: 'welle',
    title: '3. Welle - Berlin Coffee Shop Finder',
    description:
      'Fullstack application designed to help Berlin residents and visitors discover the best specialty coffee shops in the city. Users can explore a map of coffee shops, read and leave reviews, and find essential information about each location.',
    liveLink: 'https://3welle.com',
    sourceLink: 'https://github.com/mikhailyatsenko/coffemapberlin',
    mainImg: welleMainImg,
    techStack: ['typescript', 'react', 'vite', 'graphql', 'node', 'mongodb'],
    features: [
      [
        {
          title: 'Modern Full-Stack Application',
          description: (
            <p>
              Full-stack application built with React, Node.js , MongoDB and
              GraphQL for efficient data querying and manipulation.
            </p>
          ),
          img: fullstackAppImg,
        },
        {
          title: "Interactive Guide to Berlin's Favorite Specialty Cafés",
          description: (
            <p>
              A database of the most popular specialty cafés in Berlin,
              displayed on an interactive map. Each café has a detailed,
              interactive page with essential information.
            </p>
          ),
          img: mapIcon,
        },
      ],
      [
        {
          title: 'Community Reviews and Ratings',
          description: (
            <p>
              The project includes a feature for reading and submitting user
              reviews for each coffee shop, along with a rating system to
              evaluate and rank favorite cafés.
            </p>
          ),
          img: reviewImg,
        },
        {
          title: 'Responsive Design',
          description: (
            <p>
              The application features a fully responsive design, ensuring
              optimal functionality and user experience across various screen
              sizes and devices.
            </p>
          ),

          img: responsiveImg,
        },
      ],
      [
        {
          title: 'User Authentication and Profile Management',
          description: (
            <p>
              The project supports Google and email authentication, providing
              users with a personal account. Within their account, users can
              edit personal details and upload a profile avatar.
            </p>
          ),
          img: accountImg,
        },
        {
          title: 'Architecture',
          description: (
            <p>
              The application on frontend follows the "Feature-Sliced Design"
              methodology. For more information on Feature-Sliced Design, visit{' '}
              <a
                href="https://feature-sliced.design"
                className="font-bold"
                target="_blank"
              >
                feature-sliced.design
              </a>
              .
            </p>
          ),

          img: fullstackAppImg,
        },
      ],
    ],
  },

  bvg: {
    id: 'bvg',
    title: 'Berlin Public Transport App',
    description:
      'This is a web application designed for viewing real-time arrival times of public transport at stops in Berlin and Brandenburg',
    liveLink: 'https://mikhailyatsenko.github.io/bvg-app-ts',
    sourceLink: 'https://github.com/mikhailyatsenko/bvg-app-ts',
    mainImg: bvgMainImg,
    techStack: ['typescript', 'react', 'redux', 'vite'],
    features: [
      [
        {
          title: 'Real-Time Departure Schedule',
          description: (
            <p>
              The application displays the schedule for upcoming departures at
              the selected stop in Berlin or Brandenburg, providing users with
              real-time information in a convenient format.
            </p>
          ),
          img: fullstackAppImg,
        },
        {
          title: 'Advanced Filtering and Favorite Stops',
          description: (
            <p>
              Users can filter results by transport type, destination, and route
              number. Frequently used stops can also be added to favorites,
              which are saved in local storage for easy access.
            </p>
          ),
          img: mapIcon,
        },
      ],
      [
        {
          title: 'User Reviews',
          description: <p>Read and submit reviews for each coffee shop.</p>,
          img: speedImg,
        },
        {
          title: 'Rating System',
          description: <p>Rate your favorite coffee shops.</p>,

          img: fullstackAppImg,
        },
      ],
    ],
  },
};
