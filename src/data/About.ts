import type { Lang } from "../i18n/types";

export interface About {
    heroTitle: string;
    heroSubtitle: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
}

export const about: Record<Lang, About> = {
    en: {
        heroTitle: 'Full-Stack Software Engineer',
        heroSubtitle: 'Building full-stack tools and platforms for enterprise clients, from front-end interfaces to cloud-based backends, with modern, AI-assisted workflows.',
        aboutParagraph1: "I'm a Software Engineer Consultant at Deloitte, where I've delivered full-stack solutions across 10+ client and internal projects using React/TypeScript, .NET, Python and Azure Cloud. Alongside enterprise work, I build personal projects spanning different technologies and domains, and I have hands-on experience with mobile platforms.",
        aboutParagraph2: "I care about clean, maintainable code and solid design patterns, and I like integrating AI-assisted development tools such as GitHub Copilot and AI agents into my daily workflow. I enjoy turning ambiguous requirements, from a quick feasibility study to a full production platform, into practical, well-structured solutions.",
    },
    it: {
        heroTitle: 'Full-Stack Software Engineer',
        heroSubtitle: 'Realizzo strumenti e piattaforme full-stack per clienti enterprise, dalle interfacce front-end ai backend su cloud, con workflow moderni e AI-assisted.',
        aboutParagraph1: 'Sono Software Engineer Consultant in Deloitte, dove ho realizzato soluzioni full-stack su oltre 10 progetti per clienti e team interni con React/TypeScript, .NET, Python e Cloud Azure. Oltre al lavoro enterprise, sviluppo progetti personali che spaziano tra tecnologie e ambiti diversi, e ho esperienza diretta anche su piattaforme mobile.',
        aboutParagraph2: 'Tengo molto a scrivere codice pulito e manutenibile seguendo design pattern solidi, e mi piace integrare strumenti di AI-assisted development come GitHub Copilot e agenti AI nel workflow quotidiano. Mi piace trasformare requisiti ambigui, da un semplice studio di fattibilit\u00e0 fino a una piattaforma in produzione, in soluzioni pratiche e ben strutturate.',
    },
};
