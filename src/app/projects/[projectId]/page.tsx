import { HeroProject } from '@/components/project/HeroProject';
import { ProjectIds } from '@/lib/projectsData';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: ProjectIds }>;
}) {
  const { projectId } = await params;
  return (
    <div className="mt-[74px] w-full bg-background">
      <HeroProject projectId={projectId} />
    </div>
  );
}