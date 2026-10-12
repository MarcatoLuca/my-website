import type { IExperience } from "../models/IExperience";
import type { Lang } from "../i18n/types";

export const experience: Record<Lang, IExperience[]> = {
    en: [
        {
            role: 'Software Engineer Consultant',
            company: 'Deloitte',
            period: 'Sep 2024 - Present',
            description: 'Delivering full-stack solutions across 10+ client and internal projects with React/TypeScript, .NET (Blazor, Razor), SharePoint/SPFx, Python (FastAPI, Azure Functions) and Azure Cloud, integrating AI-assisted development tools (GitHub Copilot, AI agents, MCP) into daily workflow.',
        },
        {
            role: 'Research & Development Intern',
            company: 'Omicron Consulting',
            period: 'Sep 2023 - Nov 2023',
            description: 'Conducted a feasibility study and built a proof-of-concept enterprise document search engine, evaluating Elasticsearch and developing a Next.js/React web app with a containerized Elasticsearch backend on Docker.',
        },
        {
            role: 'Software Developer',
            company: 'Ifin Sistemi Srl',
            period: 'Jul 2021 - Sep 2021',
            description: 'Planned and carried out the migration of a graphics library to a new major version within a Spring Boot web application, updating CSS classes and components to resolve breaking changes.',
        }
    ],
    it: [
        {
            role: 'Software Engineer Consultant',
            company: 'Deloitte',
            period: 'Set. 2024 - Presente',
            description: 'Sviluppo di soluzioni full-stack su oltre 10 progetti per clienti e team interni con React/TypeScript, .NET (Blazor, Razor), SharePoint/SPFx, Python (FastAPI, Azure Functions) e Cloud Azure, integrando strumenti di AI-assisted development (GitHub Copilot, agenti AI, MCP) nel workflow quotidiano.',
        },
        {
            role: 'Research & Development Intern',
            company: 'Omicron Consulting',
            period: 'Set. 2023 - Nov. 2023',
            description: 'Studio di fattibilit\u00e0 e sviluppo di un proof-of-concept per un motore di ricerca documentale aziendale, valutando Elasticsearch e realizzando una web app Next.js/React con backend Elasticsearch containerizzato su Docker.',
        },
        {
            role: 'Software Developer',
            company: 'Ifin Sistemi Srl',
            period: 'Lug. 2021 - Set. 2021',
            description: 'Pianificazione e realizzazione del porting di una libreria grafica a una nuova versione major in un\u2019applicazione web Spring Boot, aggiornando classi CSS e componenti per risolvere le breaking changes.',
        }
    ],
};