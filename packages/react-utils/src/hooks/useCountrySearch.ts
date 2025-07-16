"use client";

import { useMemo, useState } from 'react';
import { countriesMock, searchCountries, type Prisma } from '@justdiego/db';

interface UseCountrySearchOptions {
  initialQuery?: string;
  limit?: number;
}

interface UseCountrySearchReturn {
  query: string;
  setQuery: (query: string) => void;
  countries: Prisma.CountryCreateInput[];
  filteredCountries: Prisma.CountryCreateInput[];
  isSearching: boolean;
  totalCount: number;
  filteredCount: number;
  clearSearch: () => void;
}

/**
 * Hook for searching and filtering countries
 * @param options - Configuration options for the search
 * @returns Object with search state and filtered results
 */
export function useCountrySearch(options: UseCountrySearchOptions = {}): UseCountrySearchReturn {
  const { initialQuery = '', limit } = options;
  const [query, setQuery] = useState(initialQuery);

  const filteredCountries = useMemo(() => {
    const results = searchCountries(query);
    return limit ? results.slice(0, limit) : results;
  }, [query, limit]);

  const isSearching = query.trim().length > 0;

  const clearSearch = () => setQuery('');

  return {
    query,
    setQuery,
    countries: countriesMock,
    filteredCountries,
    isSearching,
    totalCount: countriesMock.length,
    filteredCount: filteredCountries.length,
    clearSearch,
  };
}
