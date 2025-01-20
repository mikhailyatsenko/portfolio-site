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
    links?: { text: string; href: string }[];
  }[][];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: ProjectIds; locale: string }>;
}) {
  const { projectId, locale } = await params;

  const { t } = await initTranslations(locale, ['projectsFeatures']);

  const translatedProjectsData = t('welle', {
    returnObjects: true,
  }) as TranslatedProjectsData;

  const projectData = projectsData[projectId];

  console.log(translatedProjectsData, projectData);

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
