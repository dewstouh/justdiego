import { cache } from 'react';
import { getProjects } from './getProjects';
import { Project } from '@justdiego/types';

export const getProjectsByCustomer = cache((customerId: string): Project[] => {
    const projects = getProjects();
    return projects.filter((project: Project) => 
        project.customerIds?.includes(customerId)
    );
})

export const getProjectsByReview = cache((reviewId: string): Project[] => {
    const projects = getProjects();
    return projects.filter((project: Project) => 
        project.reviewIds?.includes(reviewId)
    );
})

export const searchProjects = cache((searchTerm: string): Project[] => {
    const projects = getProjects();
    const term = searchTerm.toLowerCase();
    
    return projects.filter((project: Project) => 
        project.slug.toLowerCase().includes(term) ||
        (project.problem && project.problem.toLowerCase().includes(term)) ||
        (project.result && project.result.toLowerCase().includes(term))
    );
})

export const getProjectsWithAttachments = cache((): Project[] => {
    const projects = getProjects();
    return projects.filter((project: Project) => 
        project.attachments && project.attachments.length > 0
    );
})
