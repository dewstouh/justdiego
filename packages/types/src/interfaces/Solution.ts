import { TechnicalDetails } from "../types";



export interface Solution {
    id: string;
    slug: string;
    projectIds?: string[];
    customerId: string;
    countryId: string;
    tagIds: string[];
    technologyIds: string[];
    problem: string;
    result: string;
    reviewId?: string;
    attachments?: string[];
    demoUrl?: string;
    completedAt: Date;
    shortDescription: string;
    fullDescription: string;
    technicalDetails: TechnicalDetails[];
    challenges: string[];
    outcomes: string[];
    createdAt: Date;
    updatedAt: Date;
}
