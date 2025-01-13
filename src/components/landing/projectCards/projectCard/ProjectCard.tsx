import { MockIphone } from '@/components/common/MockIphone/MockIphone';
import Image, { StaticImageData } from 'next/image';
import { ButtonWithArrow } from '@/components/common/Buttons/ButtonWithArrow';
import Link from 'next/link';
import { AnimateInView } from '@/components/common/AnimateInView';
import { Badge } from '@/components/common/Badges';
import { BadgeProps } from '@/components/common/Badges';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  detailsLink: string;
  slide: StaticImageData;
  badges: BadgeProps['type'][];
}

export const ProjectCard = ({
  title,
  description,
  link,
  linkText,
  detailsLink,
  slide,
  badges,
}: ProjectCardProps) => {
  return (
    <div className="sm576:justify-star flex h-full max-h-screen justify-center overflow-hidden sm576:px-10 sm576:py-6 md:py-10 lg:gap-10 lg:px-20">
      <AnimateInView
        className="opacity-0 transition-opacity duration-500 ease-in-out"
        activeClass="!opacity-100"
      >
        <MockIphone screenContent={<Image src={slide} alt={title} />} />
      </AnimateInView>

      <AnimateInView
        resetOnExit={true}
        threshold={0.7}
        activeClass="!opacity-100 z-[2] transition-opacity duration-1000 ease-in-out"
        className="z-[2] h-full w-full grow-0 overflow-y-auto bg-opacity-80 px-6 pt-6 opacity-0 transition-opacity duration-1000 ease-in-out bg-opacity-variable sm576:bg-transparent sm576:pt-2 sm576:text-white sm576:opacity-100 md:px-10"
      >
        <h3 className="mb-0.5 text-balance text-xl font-bold md:text-h3">
          {title}
        </h3>
        <div className="mb-2 flex flex-wrap gap-y-1.5">
          {badges.map((item) => (
            <Badge key={item} type={item} />
          ))}
        </div>
        <a
          className="font-bold"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`🔗 ${linkText}`}
        </a>
        <div className="h-md:block mt-6 hidden">{description}</div>

        <div className="flex justify-center sm576:justify-start">
          <Link href={`projects/${detailsLink}`}>
            <ButtonWithArrow className="my-5">More details</ButtonWithArrow>
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};
