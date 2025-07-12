import { cache } from 'react';
import { getTechnologies } from './getTechnologies';
import { Technology } from '@justdiego/types';

export const getTechnology = cache((id: string): Technology | undefined => {
    const technologies = getTechnologies();
    const technology = technologies.find((t: Technology) => t.id === id);
    return technology;
})
