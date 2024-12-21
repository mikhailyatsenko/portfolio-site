import { StackCards } from '@/components/common/stackCards/StackCards';

export const Projects = () => {
  const cardContents = [
    <div className="h-96" key={'1'}>
      Card 1 Content
    </div>,
    <div className="h-96" key={'2'}>
      Card 2 Content
    </div>,
    <div className="h-96" key={'3'}>
      Card 3 Content
    </div>,
    <div className="h-96" key={'4'}>
      Card 4 Content
    </div>,
  ];
  return (
    <section className="px-8 py-6 md:px-14 md:py-16">
      <div className="h-screen-minus-nav bg-gray-100 p-6">
        <StackCards items={cardContents} />
      </div>
      <div className="h-screen bg-slate-500"></div>
    </section>
  );
};
