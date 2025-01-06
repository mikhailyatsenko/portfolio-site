import { HeroProject } from '@/components/project/HeroProject';
import ProjectModal from './ProjectModal';
import { ProjectIds } from '@/lib/projectsData';
import { ProjectFeatures } from '@/components/project/ProjectFeatures';

export default async function ProjectPageForModal({
  params,
}: {
  params: Promise<{ projectId: ProjectIds }>;
}) {
  const { projectId } = await params;
  return (
    <ProjectModal>
      <HeroProject projectId={projectId} />
      <ProjectFeatures projectId={projectId} />
    </ProjectModal>
  );
}
