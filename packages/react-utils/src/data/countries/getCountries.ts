import { cache } from 'react';
import { countriesMock } from '@justdiego/mocks';
import { Country } from '@justdiego/types';

export const getCountries = cache((): Country[] => {
    return countriesMock;
})
