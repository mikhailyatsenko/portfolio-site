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
import ZustandIcon from '@/assets/icons/stackIcons/zustand.svg';
import PostgresqlIcon from '@/assets/icons/stackIcons/postgresql.svg';
export type TechStackIconKey = keyof typeof techStackIconsData;

export const techStackIconsData = {
  typescript: {
    name: 'Typescript',
    icon: TypescriptIcon,
  },
  javascript: {
    name: 'Javascript',
    icon: JavascriptIcon,
  },

  react: {
    name: 'React',
    icon: ReactIcon,
  },
  redux: {
    name: 'Redux',
    icon: ReduxIcon,
  },
  zustand: {
    name: 'Zustand',
    icon: ZustandIcon,
  },
  next: {
    name: 'Next.js',
    icon: NextIcon,
  },
  node: {
    name: 'Node.js',
    icon: NodeIcon,
  },
  graphql: {
    name: 'GraphQL',
    icon: GraphqlIcon,
  },
  mongodb: {
    name: 'MongoDB',
    icon: MongoDbIcon,
  },
  tailwind: {
    name: 'Tailwind',
    icon: TailwindIcon,
  },
  vite: {
    name: 'Vite',
    icon: ViteIcon,
  },
  webpack: {
    name: 'Webpack',
    icon: WebpackIcon,
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: PostgresqlIcon,
  },
};
