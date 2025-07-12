import { cache } from 'react';
import { projectsMock } from '@justdiego/mocks';
import { Project } from '@justdiego/types';

export const getProjects = cache((): Project[] => {
    return projectsMock;
})
