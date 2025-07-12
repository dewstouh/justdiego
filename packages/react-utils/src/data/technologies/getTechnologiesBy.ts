import { cache } from 'react';
import { getTechnologies } from './getTechnologies';
import { Technology } from '@justdiego/types';

export const getTechnologiesByName = cache((name: string): Technology[] => {
    const technologies = getTechnologies();
    return technologies.filter((tech: Technology) => 
        tech.name.toLowerCase().includes(name.toLowerCase())
    );
})

export const getTechnologiesByColor = cache((color: string): Technology[] => {
    const technologies = getTechnologies();
    return technologies.filter((tech: Technology) => tech.color === color);
})

export const searchTechnologies = cache((searchTerm: string): Technology[] => {
    const technologies = getTechnologies();
    const term = searchTerm.toLowerCase();
    
    return technologies.filter((tech: Technology) => 
        tech.name.toLowerCase().includes(term) ||
        (tech.description && tech.description.toLowerCase().includes(term))
    );
})
