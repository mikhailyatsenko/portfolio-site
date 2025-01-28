import Image, { StaticImageData } from 'next/image';
import { AnimateInView } from '@/lib/AnimateInView';

type ProjectTwoFeaturesRowProps = {
  indexChildRow: number;
  featuresRow: {
    title: string;
    description: string;
  }[];
  featuresImgs: StaticImageData[][];
};

export const ProjectTwoFeaturesRow: React.FC<ProjectTwoFeaturesRowProps> = ({
  featuresRow,
  indexChildRow,
  featuresImgs,
}) => {
  return (
    <div className="container mx-auto mb-8 overflow-hidden">
      <AnimateInView
        threshold={0.3}
        className="relative -bottom-12 grid w-full grid-cols-1 gap-y-8 opacity-0 duration-300 ease-in-out md:grid-cols-5 md:gap-x-4 lg:gap-x-8"
        activeClass="!opacity-100 !bottom-0"
      >
        {featuresRow.map((feature, index) => (
          <div
            key={index}
            className={`${
              indexChildRow % 2 === 0
                ? index === 0
                  ? 'col-span-2'
                  : 'col-span-3'
                : index === 0
                  ? 'col-span-3'
                  : 'col-span-2'
            } flex flex-col justify-start gap-2 overflow-hidden rounded-lg bg-opacity-5 p-5 text-center shadow-sm fg-opacity-variable`}
          >
            <Image
              src={featuresImgs[indexChildRow][index]}
              alt={feature.title}
              className="mx-auto max-h-[100px] w-auto rounded-t-lg object-contain"
            />
            <h4 className="text-2xl font-medium text-foreground">
              {feature.title}
            </h4>
            <div className="">
              <p dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          </div>
        ))}
      </AnimateInView>
    </div>
  );
};
