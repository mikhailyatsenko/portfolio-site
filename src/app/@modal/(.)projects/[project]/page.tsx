import { HeroProject } from '@/components/project/HeroProject';
import ProjectModal from './ProjectModal';

export default async function ProjectPageForModal({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return (
    <ProjectModal>
      <HeroProject projectId={projectId} />
    </ProjectModal>
  );
}
