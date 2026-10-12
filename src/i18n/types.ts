export type Lang = 'it' | 'en';

export interface Strings {
  nav: {
    brand: string;
    home: string;
    projects: string;
  };
  home: {
    viewProjects: string;
    aboutTitle: string;
    skillsTitle: string;
    featuredProjectsTitle: string;
    viewAll: string;
    experienceTitle: string;
    contactTitle: string;
    contactText: string;
  };
  projectsPage: {
    title: string;
    subtitle: string;
  };
  projectBadges: {
    personal: string;
    company: string;
  };
  projectDetail: {
    notFoundTitle: string;
    backToProjects: string;
    year: string;
    client: string;
    role: string;
    links: string;
    visitProject: string;
    viewOnGithub: string;
    overview: string;
    challenge: string;
    solution: string;
    nextProject: string;
    backToAllProjects: string;
  };
  footer: {
    rights: string;
    quote: string;
  };
}
