import { cache } from 'react';
import { solutionCases } from '@justdiego/mocks';

export const getSolutions = cache(() => {
    return solutionCases;
})