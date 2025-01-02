import { MockIphone } from '@/components/common/MockIphone/MockIphone';
import Image, { StaticImageData } from 'next/image';
// import cls from './ProjectCard.module.css';
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
    <div className="flex">
      <MockIphone screenContent={<Image src={slide} alt={title} />} />

      <AnimateInView
        resetOnExit={true}
        threshold={0.5}
        activeClass="!opacity-100 z-[2]"
      >
        <div
          className={`z-[2] grow-0 overflow-y-auto bg-background px-6 py-9 sm576:bg-transparent`}
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
          <div className="mt-6 hidden lg:block">{description}</div>

          <div className="mt-4">
            <h4 className="text-xl md:text-h4">Features </h4>
            <ul className="ml-4 list-disc md:ml-6">
              {featuresList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <Link href={detailsLink}>
            <ButtonWithArrow className="my-5">More details</ButtonWithArrow>
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};
