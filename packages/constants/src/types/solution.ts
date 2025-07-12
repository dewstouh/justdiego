export interface SolutionCase {
    id: string;
    slug: string;
    project: string;
    company: string;
    companyHref: string;
    country: string;
    countryFlag: string;
    companyLogo: string;
    problem: string;
    result: string;
    review: string;
    reviewer: string;
    reviewerAvatar: string;
    screenshots: string[];
    demoUrl?: string;
    tags: string[];
    completedDate: string;
    shortDescription: string;
    fullDescription: string;
    technicalDetails: {
        title: string;
        content: string;
    }[];
    challenges: string[];
    outcomes: string[];
    technologies: string[];
}
