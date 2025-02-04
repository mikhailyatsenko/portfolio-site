import { MockIphone } from '@/app/components/common/MockIphone/MockIphone';
import Image, { StaticImageData } from 'next/image';
import { ButtonWithShadow } from '@/app/components/common/Buttons/ButtonWithShadow';
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
    <div className="bg-gradient dark:bg-gradient-dark flex h-full max-h-screen min-h-96 w-full justify-center overflow-hidden sm576:justify-start sm576:px-10 sm576:py-6 md:py-10 lg:gap-10 lg:px-20">
      <MockIphone screenContent={<Image src={slide} alt={title} />} />

      <AnimateInView
        resetOnExit={true}
        threshold={0.8}
        activeClass="!opacity-100 z-[2] transition-opacity duration-1000 ease-in-out"
        className="z-[2] min-h-96 w-full grow-0 overflow-y-auto bg-gray-800 bg-opacity-40 px-6 pt-6 text-white opacity-0 backdrop-blur-[1px] transition-opacity duration-1000 ease-in-out sm576:bg-transparent sm576:pt-2 sm576:text-foreground sm576:opacity-100 sm576:backdrop-blur-none sm576:backdrop-filter-none md:px-10"
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
        <div className="mt-6 hidden h-sm:sm:block">{description}</div>

        <div className="flex justify-center sm576:justify-start">
          <Link href={`projects/${detailsLink}`}>
            <ButtonWithShadow className="my-5">
              {t('moreDetails')}
            </ButtonWithShadow>
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};
