import { MockIphone } from '@/app/components/common/MockIphone/MockIphone';
import Image, { StaticImageData } from 'next/image';
import { ButtonWithArrow } from '@/app/components/common/Buttons/ButtonWithArrow';
import Link from 'next/link';
import { AnimateInView } from '@/lib/AnimateInView';
import { Badge } from '@/app/components/common/Badges';
import { BadgeProps } from '@/app/components/common/Badges';
import initTranslations from '@/app/i18n';
import { getLocale } from '@/lib/getLocale';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  detailsLink: string;
  slide: StaticImageData;
  badges: BadgeProps['type'][];
}

export const ProjectCard = async ({
  title,
  description,
  link,
  linkText,
  detailsLink,
  slide,
  badges,
}: ProjectCardProps) => {
  const locale = await getLocale();
  const { t } = await initTranslations(locale, ['common']);
  return (
    <div className="flex h-full max-h-screen w-full justify-center overflow-hidden bg-background sm576:justify-start sm576:bg-gray-800 sm576:bg-opacity-30 sm576:bg-clip-padding sm576:px-10 sm576:py-6 sm576:backdrop-blur-md sm576:backdrop-filter sm576:dark:bg-gray-600 sm576:dark:bg-opacity-30 md:py-10 lg:gap-10 lg:px-20">
      <AnimateInView
        className="min-h-96 opacity-0 transition-opacity duration-500 ease-in-out"
        activeClass="!opacity-100"
      >
        <MockIphone screenContent={<Image src={slide} alt={title} />} />
      </AnimateInView>

      <AnimateInView
        resetOnExit={true}
        threshold={0.7}
        activeClass="!opacity-100 z-[2] transition-opacity duration-1000 ease-in-out"
        className="z-[2] w-full grow-0 overflow-y-auto bg-gray-800 bg-opacity-40 bg-clip-padding px-6 pt-6 text-white opacity-0 backdrop-blur-md backdrop-filter transition-opacity duration-1000 ease-in-out sm576:bg-transparent sm576:pt-2 sm576:opacity-100 sm576:backdrop-blur-none sm576:backdrop-filter-none md:px-10"
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
        <div className="mt-6 hidden h-md:sm:block">{description}</div>

        <div className="flex justify-center sm576:justify-start">
          <Link href={`projects/${detailsLink}`}>
            <ButtonWithArrow className="my-5">
              {t('moreDetails')}
            </ButtonWithArrow>
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};
