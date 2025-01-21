import encryptMainImg from '@/assets/projectFeatures/encrypnt-desktop.webp';
import welleMainImg from '@/assets/projectFeatures/3welle-main.webp';
import fullstackAppImg from '@/assets/projectFeatures/fullstack-app.svg?url';
import speedImg from '@/assets/projectFeatures/speed.svg?url';
import mapIcon from '@/assets/projectFeatures/map-icon.svg?url';
import bvgMainImg from '@/assets/projectFeatures/bvg-main.webp';
import reviewImg from '@/assets/projectFeatures/review.svg?url';
import responsiveImg from '@/assets/projectFeatures/responsive.svg?url';
import accountImg from '@/assets/projectFeatures/account.svg?url';
import scheduleImg from '@/assets/projectFeatures/schedule.svg?url';
import architectureImg from '@/assets/projectFeatures/architecture.svg?url';
import { TechStackIconKey } from './techStackIconsData';
import { StaticImageData } from 'next/image';

export type ProjectIds = 'encryptnotes' | 'welle' | 'bvg';

export interface ProjectData {
  id: ProjectIds;
  techStack: TechStackIconKey[];
  mainImg: StaticImageData;
  featuresImgs: StaticImageData[][];
}

export type ProjectsData = Record<ProjectIds, ProjectData>;

export const projectsData: ProjectsData = {
  encryptnotes: {
    id: 'encryptnotes',
    mainImg: encryptMainImg,
    techStack: ['react', 'typescript', 'vite', 'node'],
    featuresImgs: [
      [responsiveImg, fullstackAppImg],
      [speedImg, fullstackAppImg],
    ],
  },

  welle: {
    id: 'welle',
    mainImg: welleMainImg,
    techStack: ['typescript', 'react', 'vite', 'graphql', 'node', 'mongodb'],
    featuresImgs: [
      [fullstackAppImg, mapIcon],
      [reviewImg, responsiveImg],
      [architectureImg, accountImg],
    ],
  },

  bvg: {
    id: 'bvg',
    mainImg: bvgMainImg,
    techStack: ['typescript', 'react', 'redux', 'vite'],
    featuresImgs: [
      [scheduleImg, mapIcon],
      [architectureImg, responsiveImg],
    ],
  },
};
