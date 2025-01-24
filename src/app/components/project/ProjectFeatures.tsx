import { ProjectTwoFeaturesRow } from './ProjectTwoFeaturesRow';
import { ProjectData } from '@/lib/projectsData';
import { TranslatedProjectsData } from '../../projects/[projectId]/page';

export interface ProjectFeaturesProps {
  projectData: ProjectData;
  translatedProjectsData: TranslatedProjectsData;
}

export const ProjectFeatures = ({
  projectData,
  translatedProjectsData,
}: ProjectFeaturesProps) => {
  const { featuresImgs } = projectData;

  const { features } = translatedProjectsData;

  return (
    <section className="px-8 py-16">
      <h2 className="mb-10 text-center text-5xl">Project features</h2>
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
