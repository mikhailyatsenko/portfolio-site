import { HeroProject } from '@/app/[locale]/components/project/HeroProject';
import ProjectModal from '@/app/clientComponents/ProjectModal';
import { ProjectIds, projectsData } from '@/lib/projectsData';
import { ProjectFeatures } from '@/app/[locale]/components/project/ProjectFeatures';
import initTranslations from '@/app/i18n';
import { TranslatedProjectsData } from '@/app/[locale]/projects/[projectId]/page';

export default async function ProjectPageForModal({
  params,
}: {
  params: Promise<{ projectId: ProjectIds; locale: string }>;
}) {
  const { projectId, locale } = await params;

  const { t } = await initTranslations(locale, ['projectsFeatures']);

  const translatedProjectsData = t(`${params}`, {
    returnObjects: true,
  }) as TranslatedProjectsData;

  if (!translatedProjectsData) return null;

  const projectData = projectsData[projectId];

  if (!projectData) return null;

  console.log(translatedProjectsData, projectData);
  return (
    <ProjectModal>
      <HeroProject
        projectData={projectData}
        translatedProjectsData={translatedProjectsData}
      />
      <ProjectFeatures
        projectData={projectData}
        translatedProjectsData={translatedProjectsData}
      />
    </ProjectModal>
  );
}
