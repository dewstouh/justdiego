import { cache } from 'react';
import { getCountries } from './getCountries';
import { Country } from '@justdiego/types';

export const getCountry = cache((id: string): Country | undefined => {
    const countries = getCountries();
    const country = countries.find((c: Country) => c.id === id);
    return country;
})
