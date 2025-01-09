import Image, { StaticImageData } from 'next/image';

type ProjectTwoFeaturesRowProps = {
  indexNum: number;
  featuresRow: {
    title: string;
    description: JSX.Element;
    img: StaticImageData;
  }[];
};

export const ProjectTwoFeaturesRow: React.FC<ProjectTwoFeaturesRowProps> = ({
  featuresRow,
  indexNum,
}) => {
  return (
    <div className="container mx-auto mb-8 grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-x-4 lg:gap-x-8">
      {featuresRow.map((feature, index) => (
        <div
          key={index}
          className={`${
            indexNum % 2 === 0
              ? index === 0
                ? 'col-span-2'
                : 'col-span-3'
              : index === 0
                ? 'col-span-3'
                : 'col-span-2'
          } flex flex-col justify-between overflow-hidden rounded-lg bg-opacity-5 px-6 pt-6 text-center shadow-sm fg-opacity-variable`}
        >
          <h4 className="mb-2 text-2xl font-medium text-foreground">
            {feature.title}
          </h4>
          <div className="py-4">{feature.description}</div>

          <Image
            src={feature.img}
            alt={feature.title}
            className="mx-auto mt-auto max-h-[250px] w-auto rounded-t-lg object-contain"
          />
        </div>
      ))}
    </div>
  );
};
