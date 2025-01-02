import { MockIphone } from '@/components/common/MockIphone/MockIphone';
import Image, { StaticImageData } from 'next/image';
import { ButtonWithArrow } from '@/components/common/Buttons/ButtonWithArrow';
import Link from 'next/link';
import { AnimateInView } from '@/components/common/AnimateInView';

interface ProjectCardProps {
  title: string;
  description: string;
  featuresList: string[];
  link: string;
  linkText: string;
  detailsLink: string;
  slide: StaticImageData;
}

export const ProjectCard = ({
  title,
  description,
  featuresList,
  link,
  linkText,
  detailsLink,
  slide,
}: ProjectCardProps) => {
  return (
    <div className="flex max-h-screen justify-center sm576:justify-start">
      <MockIphone screenContent={<Image src={slide} alt={title} />} />

      <AnimateInView
        resetOnExit={true}
        threshold={0.5}
        activeClass="!opacity-100 z-[2] transition-opacity duration-1000 ease-in-out"
        className="bg-opacity-variable z-[2] h-full min-h-[540] w-full grow-0 overflow-y-auto bg-opacity-80 px-6 py-9 opacity-0 transition-opacity duration-1000 ease-in-out sm576:bg-transparent"
      >
        <h3 className="mb-3 text-balance text-xl font-bold md:text-h3">
          {title}
        </h3>
        <a
          className="font-bold"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`🔗 ${linkText}`}
        </a>
        <div className="mt-6">{description}</div>

        <div className="mt-4 hidden lg:block">
          <h4 className="text-xl md:text-h4">Features</h4>
          <ul className="ml-4 list-disc md:ml-6">
            {featuresList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center sm576:justify-start">
          <Link href={detailsLink}>
            <ButtonWithArrow className="my-5">More details</ButtonWithArrow>
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};
