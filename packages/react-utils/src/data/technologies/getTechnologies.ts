import { cache } from 'react';
import { technologiesMock } from '@justdiego/mocks';
import { Technology } from '@justdiego/types';

export const getTechnologies = cache((): Technology[] => {
    return technologiesMock;
})
