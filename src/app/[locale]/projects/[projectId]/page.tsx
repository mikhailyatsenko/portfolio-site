import { HeroProject } from '@/app/[locale]/components/project/HeroProject';
import { ProjectFeatures } from '@/app/[locale]/components/project/ProjectFeatures';
import { ProjectIds, projectsData } from '@/lib/projectsData';
import initTranslations from '@/app/i18n';

export interface TranslatedProjectsData {
  id: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
  techStack: string[];
  features: {
    title: string;
    description: string;
    links?: Record<string, string>;
  }[][];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: ProjectIds; locale: string }>;
}) {
  const { projectId, locale } = await params;

  const { t } = await initTranslations(locale, ['projectsFeatures']);

  const translatedProjectsData = t(projectId, {
    returnObjects: true,
  }) as TranslatedProjectsData;

  if (!translatedProjectsData) return null;

  const projectData = projectsData[projectId];

  if (!projectData) return null;

  return (
    <div className="mt-[74px] w-full bg-background">
      <HeroProject
        projectData={projectData}
        translatedProjectsData={translatedProjectsData}
      />
      <ProjectFeatures
        projectData={projectData}
        translatedProjectsData={translatedProjectsData}
      />
    </div>
  );
}
