export interface IProject {
    id: string;
    title: string;
    description: string;
    image?: string;
    year: string;
    heroImage?: string;
    client?: string;
    role?: string;
    tags?: string[];
    overview?: string;
    challenge?: string;
    solution?: string;
    images?: string[];
    link?: string;
    github?: string;
}