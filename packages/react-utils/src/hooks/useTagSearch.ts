"use client";

import { useState, useMemo } from 'react';
import { tagsMock, searchTags, type Prisma } from '@justdiego/db';

interface UseTagSearchOptions {
  initialQuery?: string;
  limit?: number;
  multiSelect?: boolean;
}

interface UseTagSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  tags: Prisma.TagCreateInput[];
  filteredTags: Prisma.TagCreateInput[];
  selectedTags: Prisma.TagCreateInput[];
  isSearching: boolean;
  totalCount: number;
  filteredCount: number;
  clearSearch: () => void;
  toggleTag: (tag: Prisma.TagCreateInput) => void;
  clearSelected: () => void;
  isTagSelected: (tag: Prisma.TagCreateInput) => boolean;
}

/**
 * Hook for searching and selecting tags
 * @param options - Configuration options for the search
 * @returns Object with search state and filtered results
 */
export function useTagSearch(options: UseTagSearchOptions = {}): UseTagSearchReturn {
  const { initialQuery = '', limit, multiSelect = true } = options;
  const [query, setQuery] = useState(initialQuery);
  const [selectedTags, setSelectedTags] = useState<Prisma.TagCreateInput[]>([]);

  const filteredTags = useMemo(() => {
    const results = searchTags(query);
    return limit ? results.slice(0, limit) : results;
  }, [query, limit]);

  const isSearching = query.trim().length > 0;

  const clearSearch = () => setQuery('');

  const toggleTag = (tag: Prisma.TagCreateInput) => {
    if (multiSelect) {
      setSelectedTags(prev => {
        const isAlreadySelected = prev.some(t => t.id === tag.id);
        if (isAlreadySelected) {
          return prev.filter(t => t.id !== tag.id);
        } else {
          return [...prev, tag];
        }
      });
    } else {
      setSelectedTags([tag]);
    }
  };

  const clearSelected = () => setSelectedTags([]);

  const isTagSelected = (tag: Prisma.TagCreateInput) => {
    return selectedTags.some(t => t.id === tag.id);
  };

  return {
    query,
    setQuery,
    tags: tagsMock,
    filteredTags,
    selectedTags,
    isSearching,
    totalCount: tagsMock.length,
    filteredCount: filteredTags.length,
    clearSearch,
    toggleTag,
    clearSelected,
    isTagSelected,
  };
}
