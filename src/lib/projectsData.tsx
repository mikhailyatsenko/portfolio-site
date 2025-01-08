import encryptMainImg from '@/assets/projectFeatures/encrypnt-desktop.webp';
import welleMainImg from '@/assets/projectFeatures/3welle-main.webp';
import responsiveImg from '@/assets/projectFeatures/enrypt-sm.webp';
import fullstackAppImg from '@/assets/projectFeatures/fullstack-app.svg?url';
import speedImg from '@/assets/projectFeatures/speed.svg?url';
import mapIcon from '@/assets/projectFeatures/map-icon.svg?url';
import bvgMainImg from '@/assets/projectFeatures/bvg-main.webp';
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
          title: 'Specialty Café Map & Database',
          description: (
            <p>
              Database of the most popular specialty cafés in Berlin, displayed
              on an interactive map.
            </p>
          ),
          img: mapIcon,
        },
        {
          title: 'Full-Stack Application with Modern Technologies',
          description: (
            <p>
              The project is a full-stack application built with React for the
              frontend, Node.js for the backend, MongoDB for the database, and
              GraphQL for efficient data querying and manipulation.
            </p>
          ),
          img: fullstackAppImg,
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
  bvg: {
    id: 'bvg',
    title: 'Berlin Public Transport App',
    description:
      'This is a web application designed for viewing real-time arrival times of public transport at stops in Berlin and Brandenburg.',
    liveLink: 'https://mikhailyatsenko.github.io/bvg-app-ts',
    sourceLink: 'https://github.com/mikhailyatsenko/bvg-app-ts',
    mainImg: bvgMainImg,
    techStack: ['typescript', 'react', 'vite'],
    features: [
      [
        {
          title: 'Specialty Café Map & Database',
          description: (
            <p>
              Database of the most popular specialty cafés in Berlin, displayed
              on an interactive map.
            </p>
          ),
          img: mapIcon,
        },
        {
          title: 'Full-Stack Application with Modern Technologies',
          description: (
            <p>
              The project is a full-stack application built with React for the
              frontend, Node.js for the backend, MongoDB for the database, and
              GraphQL for efficient data querying and manipulation.
            </p>
          ),
          img: fullstackAppImg,
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
