'use client';

import React, { useState, useMemo } from 'react';
import { Tag } from '@justdiego/types';
import Categories from './Categories';
import LatestGuides from './LatestGuides';
import AllGuides from './AllGuides';
import EmptyState from './EmptyState';

export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl?: string | null;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: Tag[];
}

interface GuidesContentProps {
  guides: Guide[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export default function GuidesContent({ guides }: GuidesContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Generate categories dynamically based on available guide tags
  const categories = useMemo(() => {
    const allCategory: Category = { id: 'all', name: 'All Guides', icon: '📚' };
    
    // Get all unique tags from guides that have tags
    const tagMap = new Map<string, Tag>();
    guides.forEach(guide => {
      guide.tags?.forEach(tag => {
        tagMap.set(tag.id, tag);
      });
    });

    // Convert tags to categories format, only including tags that are used in guides
    const tagCategories: Category[] = Array.from(tagMap.values()).map(tag => ({
      id: tag.id,
      name: tag.name,
      icon: tag.iconUrl || '🏷️' // fallback icon if no iconUrl is provided
    }));

    // Sort categories alphabetically by name
    tagCategories.sort((a, b) => a.name.localeCompare(b.name));

    return [allCategory, ...tagCategories];
  }, [guides]);

  // Filter guides based on selected category
  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'all') {
      return guides;
    }
    
    return guides.filter(guide => 
      guide.tags?.some(tag => tag.id === selectedCategory)
    );
  }, [guides, selectedCategory]);

  return (
    <>
      <Categories 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <div>
        {selectedCategory === 'all' && (
          <LatestGuides guides={guides} />
        )}

        <AllGuides 
          guides={filteredGuides}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>

      {filteredGuides.length === 0 && (
        <EmptyState 
          selectedCategory={selectedCategory}
          categories={categories}
        />
      )}
    </>
  );
}
