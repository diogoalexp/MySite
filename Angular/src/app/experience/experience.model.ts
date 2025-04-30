export interface Experience {
    title: string;
    company: string;
    country: string;
    city: string;
    description: string;
    icon: string;
    projects: Project[];
}

export interface Project {
    name: string;
    start: Date;
    end: Date;
    details: string;
    achievements: string[];
    skills: string[];
}