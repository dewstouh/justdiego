'use client';

import React, { useState } from 'react';
import { GuideCard } from './GuideCard';

interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl?: string | null;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

interface GuidesContentProps {
  guides: Guide[];
}

// Define guide categories
const categories = [
  { id: 'all', name: 'All Guides', icon: '📚' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'automation', name: 'Automation', icon: '🤖' },
  { id: 'productivity', name: 'Productivity', icon: '⚡' },
  { id: 'marketing', name: 'Marketing', icon: '📢' },
  { id: 'transformation', name: 'Digital', icon: '🔄' },
];


export default function GuidesContent({ guides }: GuidesContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const latestGuides = guides.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return (
    <>
      {/* Categories Section */}
      <div className="border-b border-gray-300 pb-8 mb-12">
        <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
          CATEGORIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 border border-gray-300 bg-white hover:border-gray-900 hover:bg-gray-50 transition-colors duration-200 text-center ${
                selectedCategory === category.id 
                  ? 'border-gray-900 bg-gray-50' 
                  : ''
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-xs font-bold uppercase tracking-wide text-gray-900">
                {category.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Guides Section */}
      <div>
        {/* Latest Guides Row - only show when "all" is selected */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
              LATEST GUIDES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestGuides.slice(0, 4).map((guide) => (
                <GuideCard key={guide.id} thumbnailUrl={guide.thumbnailUrl} slug={guide.slug} title={guide.title} description={guide.description} />
              ))}
            </div>
          </div>
        )}

        {/* All Guides Row */}
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
            {selectedCategory === 'all' 
              ? 'ALL GUIDES' 
              : `${categories.find(c => c.id === selectedCategory)?.name.toUpperCase()} GUIDES`
            }
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} thumbnailUrl={guide.thumbnailUrl} slug={guide.slug} title={guide.title} description={guide.description} />
            ))}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {guides.length === 0 && (
        <div className="text-center py-24 border border-gray-300 bg-white">
          <div className="text-4xl mb-4 text-gray-400">📄</div>
          <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
            NO GUIDES AVAILABLE
          </h3>
          <p className="text-gray-600 text-xs">
            {selectedCategory === 'all' 
              ? 'Check back soon for business optimization resources.'
              : `No guides found in the ${categories.find(c => c.id === selectedCategory)?.name} category.`
            }
          </p>
        </div>
      )}
    </>
  );
}
