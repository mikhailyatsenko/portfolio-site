import { HeroProject } from '@/app/components/project/HeroProject';
import { ProjectFeatures } from '@/app/components/project/ProjectFeatures';
import { ProjectIds, projectsData } from '@/lib/projectsData';
import initTranslations from '@/app/i18n';

import { getLocale } from '@/lib/getLocale';

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
  params: Promise<{ projectId: ProjectIds }>;
}) {
  const { projectId } = await params;

  const locale = await getLocale();

  const { t } = await initTranslations(locale, ['projectsFeatures']);

  const translatedProjectsData = t(projectId, {
    returnObjects: true,
  }) as TranslatedProjectsData;

  if (!translatedProjectsData) return null;

  const projectData = projectsData[projectId];

  console.log('locale in projID page', locale);

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
