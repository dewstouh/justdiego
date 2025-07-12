import { cache } from 'react';
import { getSolutions } from './getSolutions';

export const getSolution = cache((slug: string) => {
    const solutions = getSolutions();
    const solution = solutions.find((s) => s.slug === slug);
    return solution;
})