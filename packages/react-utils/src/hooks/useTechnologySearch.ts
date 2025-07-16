"use client";

import { useState, useMemo } from 'react';
import { technologiesMock, searchTechnologies, type Prisma } from '@justdiego/db';

interface UseTechnologySearchOptions {
  initialQuery?: string;
  limit?: number;
  multiSelect?: boolean;
}

interface UseTechnologySearchReturn {
  query: string;
  setQuery: (query: string) => void;
  technologies: Prisma.TechnologyCreateInput[];
  filteredTechnologies: Prisma.TechnologyCreateInput[];
  selectedTechnologies: Prisma.TechnologyCreateInput[];
  isSearching: boolean;
  totalCount: number;
  filteredCount: number;
  clearSearch: () => void;
  toggleTechnology: (tech: Prisma.TechnologyCreateInput) => void;
  clearSelected: () => void;
  isTechnologySelected: (tech: Prisma.TechnologyCreateInput) => boolean;
}

/**
 * Hook for searching and selecting technologies
 * @param options - Configuration options for the search
 * @returns Object with search state and filtered results
 */
export function useTechnologySearch(options: UseTechnologySearchOptions = {}): UseTechnologySearchReturn {
  const { initialQuery = '', limit, multiSelect = true } = options;
  const [query, setQuery] = useState(initialQuery);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Prisma.TechnologyCreateInput[]>([]);

  const filteredTechnologies = useMemo(() => {
    const results = searchTechnologies(query);
    return limit ? results.slice(0, limit) : results;
  }, [query, limit]);

  const isSearching = query.trim().length > 0;

  const clearSearch = () => setQuery('');

  const toggleTechnology = (tech: Prisma.TechnologyCreateInput) => {
    if (multiSelect) {
      setSelectedTechnologies(prev => {
        const isAlreadySelected = prev.some(t => t.id === tech.id);
        if (isAlreadySelected) {
          return prev.filter(t => t.id !== tech.id);
        } else {
          return [...prev, tech];
        }
      });
    } else {
      setSelectedTechnologies([tech]);
    }
  };

  const clearSelected = () => setSelectedTechnologies([]);

  const isTechnologySelected = (tech: Prisma.TechnologyCreateInput) => {
    return selectedTechnologies.some(t => t.id === tech.id);
  };

  return {
    query,
    setQuery,
    technologies: technologiesMock,
    filteredTechnologies,
    selectedTechnologies,
    isSearching,
    totalCount: technologiesMock.length,
    filteredCount: filteredTechnologies.length,
    clearSearch,
    toggleTechnology,
    clearSelected,
    isTechnologySelected,
  };
}
