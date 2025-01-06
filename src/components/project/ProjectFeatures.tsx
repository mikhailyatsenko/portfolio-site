import { ProjectTwoFeaturesRow } from './ProjectTwoFeaturesRow';
import { projectsData, ProjectIds } from '@/lib/projectsData';

export interface ProjectFeaturesProps {
  projectId: ProjectIds;
}

export const ProjectFeatures = ({ projectId }: ProjectFeaturesProps) => {
  const project = projectsData[projectId];
  if (!project) {
    return null; // or a loading spinner
  }
  const { features } = project;
  return (
    <section className="px-8 py-16">
      <h2 className="mb-10 text-center text-5xl">Project features</h2>
      {features.map((featureRow, index) => (
        <ProjectTwoFeaturesRow
          indexNum={index}
          key={index}
          featuresRow={featureRow}
        />
      ))}
    </section>
  );
};
