import { cache } from 'react';
import { solutionsMock } from '@justdiego/mocks';

export const getSolutions = cache(() => {
    return solutionsMock;
})