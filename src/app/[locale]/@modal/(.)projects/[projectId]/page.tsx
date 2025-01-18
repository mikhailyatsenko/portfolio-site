import { HeroProject } from '@/app/[locale]/components/project/HeroProject';
import ProjectModal from '@/app/clientComponents/ProjectModal';
import { ProjectIds } from '@/lib/projectsData';
import { ProjectFeatures } from '@/app/[locale]/components/project/ProjectFeatures';

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
