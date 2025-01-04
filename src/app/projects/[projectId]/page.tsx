import { HeroProject } from '@/components/project/HeroProject';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return (
    <div className="mt-[74px] w-full bg-background">
      <HeroProject projectId={projectId} />
    </div>
  );
}
