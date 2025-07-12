import { cache } from 'react';
import { tagsMock } from '@justdiego/mocks';
import { Tag } from '@justdiego/types';

export const getTags = cache((): Tag[] => {
    return tagsMock;
})