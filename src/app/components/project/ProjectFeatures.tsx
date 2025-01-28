import { ProjectTwoFeaturesRow } from './ProjectTwoFeaturesRow';
import { ProjectData } from '@/lib/projectsData';
import { TranslatedProjectsData } from '../../projects/[projectId]/page';

export interface ProjectFeaturesProps {
  projectData: ProjectData;
  translatedProjectsData: TranslatedProjectsData;
  t: (key: string) => string;
}

export const ProjectFeatures = ({
  projectData,
  translatedProjectsData,
  t,
}: ProjectFeaturesProps) => {
  const { featuresImgs } = projectData;

  const { features } = translatedProjectsData;

  return (
    <section className="px-8 py-16">
      <h2 className="mb-10 text-center text-3xl sm576:text-5xl">
        {t('common:projectFeatures')}
      </h2>
      {features.map((featureRow, index) => (
        <ProjectTwoFeaturesRow
          indexChildRow={index}
          key={index}
          featuresRow={featureRow}
          featuresImgs={featuresImgs}
        />
      ))}
    </section>
  );
};
