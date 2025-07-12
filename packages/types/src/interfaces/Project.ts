import { TechnicalDetails } from "../types";

export interface Project {
    id: string;
    slug: string;
    problem: string;
    result: string;
    reviewIds?: string[];
    attachments?: string[];
    customerIds?: string[]; // Optional, as a project can be associated with multiple customers
    demoUrl?: string;
    tagIds: string[];
    completedAt?: Date;
    startedAt: Date;
    shortDescription: string;
    fullDescription: string;
    technicalDetails: TechnicalDetails[];
    challenges: string[];
    outcomes: string[];
    technologyIds: string[];
    createdAt: Date;
    updatedAt: Date;
}