import { HeroProject } from '@/components/project/HeroProject';
import ProjectModal from './ProjectModal';
import { ProjectIds } from '@/lib/projectsData';

export default async function ProjectPageForModal({
  params,
}: {
  params: Promise<{ projectId: ProjectIds }>;
}) {
  const { projectId } = await params;
  return (
    <ProjectModal>
      <HeroProject projectId={projectId} />
    </ProjectModal>
  );
}
