import GraphqlIcon from '@/assets/icons/stackIcons/graphql.svg';
import JavascriptIcon from '@/assets/icons/stackIcons/javascript.svg';
import NextIcon from '@/assets/icons/stackIcons/next.svg';
import NodeIcon from '@/assets/icons/stackIcons/node.svg';
import ReactIcon from '@/assets/icons/stackIcons/react.svg';
import ReduxIcon from '@/assets/icons/stackIcons/redux.svg';
import TailwindIcon from '@/assets/icons/stackIcons/tailwind.svg';
import TypescriptIcon from '@/assets/icons/stackIcons/typescript.svg';
import ViteIcon from '@/assets/icons/stackIcons/vite.svg';
import WebpackIcon from '@/assets/icons/stackIcons/webpack.svg';
import MongoDbIcon from '@/assets/icons/stackIcons/mongodb.svg';

export type TechStackIconKey = keyof typeof techStackIconsData;

export const techStackIconsData = {
  graphql: {
    name: 'GraphQL',
    icon: GraphqlIcon,
  },
  javascript: {
    name: 'Javascript',
    icon: JavascriptIcon,
  },
  next: {
    name: 'Next.js',
    icon: NextIcon,
  },
  node: {
    name: 'Node.js',
    icon: NodeIcon,
  },
  react: {
    name: 'React',
    icon: ReactIcon,
  },
  redux: {
    name: 'Redux',
    icon: ReduxIcon,
  },
  tailwind: {
    name: 'Tailwind',
    icon: TailwindIcon,
  },
  typescript: {
    name: 'Typescript',
    icon: TypescriptIcon,
  },
  vite: {
    name: 'Vite',
    icon: ViteIcon,
  },
  webpack: {
    name: 'Webpack',
    icon: WebpackIcon,
  },
  mongodb: {
    name: 'MongoDB',
    icon: MongoDbIcon,
  },
};
