import { StackCards } from '@/components/common/stackCards/StackCards';
import { Project3WelleCard } from './project-cards/Project3WelleCard';

export const Projects = () => {
  const cardContents = [
    <div key={'1'}>
      <h2 className="text-h2">Some projects</h2>
    </div>,
    <Project3WelleCard key={'Project3WelleCard'} />,
    <div
      className="h-screen-minus-nav rounded border-2 border-solid border-red-800 bg-slate-200 p-4 shadow-md"
      key={'3'}
    >
      Card 3 Content
    </div>,
    <div
      className="h-screen-minus-nav rounded border-2 border-solid border-red-800 bg-slate-200 p-4 shadow-md"
      key={'4'}
    >
      Card 4 Content
    </div>,
    <div
      className="h-screen-minus-nav rounded border-2 border-solid border-red-800 bg-slate-200 p-4 shadow-md"
      key={'4'}
    >
      Card 4 Content
    </div>,
    <div
      className="h-screen-minus-nav rounded border-2 border-solid border-red-800 bg-slate-200 p-4 shadow-md"
      key={'4'}
    >
      Card 4 Content
    </div>,
  ];
  return (
    <section className="px-8 py-6 md:px-14 md:py-16">
      <div className="min-h-min">
        <StackCards items={cardContents} />
      </div>
    </section>
  );
};
