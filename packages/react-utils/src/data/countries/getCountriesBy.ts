import { cache } from 'react';
import { getCountries } from './getCountries';
import { Country } from '@justdiego/types';

export const getCountriesByName = cache((name: string): Country[] => {
    const countries = getCountries();
    return countries.filter((country: Country) => 
        country.name.toLowerCase().includes(name.toLowerCase())
    );
})

export const searchCountries = cache((searchTerm: string): Country[] => {
    const countries = getCountries();
    const term = searchTerm.toLowerCase();
    
    return countries.filter((country: Country) => 
        country.name.toLowerCase().includes(term) ||
        country.id.toLowerCase().includes(term)
    );
})

export const getCountriesByRegion = cache((region: string): Country[] => {
    const countries = getCountries();
    // This is a simple implementation - you could enhance with actual region data
    const regionMappings: Record<string, string[]> = {
        'north-america': ['us', 'ca', 'mx'],
        'europe': ['gb', 'de', 'fr', 'es', 'it', 'nl', 'se', 'no', 'dk', 'fi'],
        'asia': ['jp', 'cn', 'kr', 'in', 'th', 'sg', 'my', 'id', 'ph', 'vn'],
        'oceania': ['au', 'nz'],
        'south-america': ['br', 'ar', 'cl', 'pe', 'co', 've', 'uy', 'py'],
        'africa': ['za', 'ng', 'eg', 'ke', 'ma', 'gh', 'tz', 'ug', 'zm', 'zw']
    };
    
    const countryIds = regionMappings[region.toLowerCase()] || [];
    return countries.filter((country: Country) => 
        countryIds.includes(country.id)
    );
})
