import { cache } from 'react';
import { getProjects } from './getProjects';
import { Project } from '@justdiego/types';

export const getProject = cache((id: string): Project | undefined => {
    const projects = getProjects();
    const project = projects.find((p: Project) => p.id === id);
    return project;
})

export const getProjectBySlug = cache((slug: string): Project | undefined => {
    const projects = getProjects();
    const project = projects.find((p: Project) => p.slug === slug);
    return project;
})
