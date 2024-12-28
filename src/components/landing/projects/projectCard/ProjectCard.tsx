import { MockIphone } from '@/components/common/MockIphone/MockIphone';
import Image from 'next/image';
import slide from '@/assets/projectsSlides/project-1-slide-1.webp';
import cls from './ProjectCard.module.css';
import { ButtonWithArrow } from '@/components/common/Buttons/ButtonWithArrow';
import Link from 'next/link';
import { ScrollTrackBlock } from '@/components/common/ScrollTrackBlock';

interface ProjectCardProps {
  cardNr: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  featuresList: string[];
  link: string;
  linkText: string;
  detailsLink: string;
}

export const ProjectCard = ({
  title,
  description,
  featuresList,
  link,
  linkText,
  detailsLink,
  cardNr,
}: ProjectCardProps) => {
  return (
    <ScrollTrackBlock id={`projectCard-${cardNr}`}>
      <div
        className="relative flex gap-5 overflow-hidden rounded-xl bg-gradient-to-br from-[#e3fdf5] to-[#ffe6fa] px-6 py-9 shadow-md dark:from-[#1f1636] dark:to-[#090610] sm:px-10 md:gap-10 lg:px-20 lg:py-10"
        key={'2'}
      >
        {/* <MockIphone
          cardNr={cardNr}
          screenContent={<Image src={slide} alt="Project 3.Welle card" />}
        /> */}

        <div
          className={`${cls[`projectCardInfo-${cardNr}`]} z-[2] grow-0 overflow-y-auto sm576:z-auto`}
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
      </div>
    </ScrollTrackBlock>
  );
};
