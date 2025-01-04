import encryptDeskImg from '@/assets/projectsSlides/encrypnt-desktop.webp';

export const projectsData = {
  encriptnotes: {
    id: 'encriptnotes',
    title: 'Encrypt Notes App',
    description:
      'This is a fullstack application designed for encrypting short notes.',
    liveLink: 'https://mikhailyatsenko.github.io/encryptnotes',
    sourceLink: 'https://github.com/mikhailyatsenko/encryptnotes',
    img: encryptDeskImg,
  },
};

export type ProjectIds = keyof typeof projectsData;
