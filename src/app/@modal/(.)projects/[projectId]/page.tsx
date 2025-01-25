import { HeroProject } from '@/app/components/project/HeroProject';
import ProjectModal from '@/app/clientComponents/ProjectModal';
import { ProjectIds, projectsData } from '@/lib/projectsData';
import { ProjectFeatures } from '@/app/components/project/ProjectFeatures';
import initTranslations from '@/app/i18n';
import { TranslatedProjectsData } from '@/app/projects/[projectId]/page';
import { cookies } from 'next/headers';

export default async function ProjectPageForModal({
  params,
}: {
  params: Promise<{ projectId: ProjectIds }>;
}) {
  const { projectId } = await params;

  const cookieStore = cookies();
  const locale = (await cookieStore).get('NEXT_LOCALE')?.value || 'en';

  const { t } = await initTranslations(locale, ['projectsFeatures']);

  const translatedProjectsData = t(projectId, {
    returnObjects: true,
  }) as TranslatedProjectsData;

  const projectData = projectsData[projectId];

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
