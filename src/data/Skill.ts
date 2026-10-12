import type { Skill } from "../models/SkillType";
import type { Lang } from "../i18n/types";

export const skills: Record<Lang, Skill> = {
    en: {
        'Languages': ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL'],
        'Frameworks': ['React', 'Next.js', '.NET (Blazor, Razor)', 'FastAPI', 'SharePoint Framework (SPFx)'],
        'Developer Tools': ['Git', 'Docker', 'Azure (Functions, Cloud Services, DevOps)', 'GitHub Copilot', 'AI Coding Agents', 'MCP', 'SSMS', 'VS Code', 'Visual Studio'],
        'Libraries': ['PrimeReact', 'Fluent UI', 'Material-UI'],
        'Databases': ['SQL Server'],
    },
    it: {
        'Linguaggi': ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL'],
        'Framework': ['React', 'Next.js', '.NET (Blazor, Razor)', 'FastAPI', 'SharePoint Framework (SPFx)'],
        'Strumenti di Sviluppo': ['Git', 'Docker', 'Azure (Functions, Cloud Services, DevOps)', 'GitHub Copilot', 'AI Coding Agents', 'MCP', 'SSMS', 'VS Code', 'Visual Studio'],
        'Librerie': ['PrimeReact', 'Fluent UI', 'Material-UI'],
        'Database': ['SQL Server'],
    },
};