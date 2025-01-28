export interface LandingTranslations {
  hero: {
    greeting: string;
    tagline: string;
    scroll: string;
  };
  profile: {
    title: string;
    photo_alt: string;
    hello: string;
    description: string;
    downloadCv: string;
  };
  tech_stack: {
    title: string;
  };
  projects: {
    title: string;
    welle: ProjectDetails;
    bvg: ProjectDetails;
    encryptnotes: ProjectDetails;
  };
  contact: {
    title: string;
    location: string;
    email: string;
    social: string;
    description: string;
  };
  footer: {
    created_by: string;
    legal_notice: string;
  };
}

interface ProjectDetails {
  title: string;
  tags: string[];
  link: string;
  description: string;
}

type TranslationKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? TranslationKeys<T[K], `${Prefix}${Extract<K, string>}.`>
    : `${Prefix}${Extract<K, string>}`;
}[keyof T];

export type LandingTranslationKeys = TranslationKeys<LandingTranslations>;
