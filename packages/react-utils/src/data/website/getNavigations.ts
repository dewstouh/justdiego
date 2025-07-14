import { navigationsMock } from '@justdiego/mocks';
import { NavigationItem } from '@justdiego/types';
import { cache } from 'react';

export const getNavigations = cache((): NavigationItem[] => {
    return navigationsMock;
})
