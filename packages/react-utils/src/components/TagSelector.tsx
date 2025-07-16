import React from 'react';
import { useTagSearch } from '../hooks/useTagSearch';
import type { Prisma } from '@justdiego/db';

interface TagSelectorProps {
  selectedTags: Prisma.TagCreateInput[];
  onTagsChange: (tags: Prisma.TagCreateInput[]) => void;
  placeholder?: string;
  limit?: number;
  showIcons?: boolean;
  className?: string;
}

export function TagSelector({
  selectedTags,
  onTagsChange,
  placeholder = "Search tags...",
  limit = 50,
  showIcons = true,
  className = ""
}: TagSelectorProps) {
  const {
    query,
    setQuery,
    filteredTags,
    isSearching,
    totalCount,
    filteredCount,
    clearSearch
  } = useTagSearch({ limit, multiSelect: true });

  // Note: No useEffect needed here as we manage state through parent props

  const handleTagToggle = (tag: Prisma.TagCreateInput) => {
    const isSelected = selectedTags.some(t => t.id === tag.id);
    if (isSelected) {
      onTagsChange(selectedTags.filter(t => t.id !== tag.id));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const removeTag = (tagId: string) => {
    onTagsChange(selectedTags.filter(t => t.id !== tagId));
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="mb-4 p-3 border-2 border-blue-200 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-blue-900">
              Selected Tags ({selectedTags.length})
            </span>
            <button
              type="button"
              onClick={() => onTagsChange([])}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold"
            >
              CLEAR ALL
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center space-x-2 px-3 py-1 bg-white border border-blue-300 rounded-full text-sm"
                style={{ backgroundColor: tag.color + '20', borderColor: tag.color }}
              >
                {showIcons && (
                  <span className="text-base" role="img" aria-label={tag.name}>
                    {tag.iconUrl}
                  </span>
                )}
                <span className="font-medium text-blue-900">{tag.name}</span>
                <button
                  type="button"
                  onClick={() => tag.id && removeTag(tag.id)}
                  className="text-blue-600 hover:text-blue-800 ml-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results Info */}
      <div className="mb-2 text-sm text-gray-600">
        {isSearching ? (
          <span>Found {filteredCount} tags</span>
        ) : (
          <span>Showing all {totalCount} tags</span>
        )}
        {limit && filteredCount >= limit && (
          <span className="text-orange-600"> (showing first {limit})</span>
        )}
      </div>

      {/* Tags List */}
      <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
        {filteredTags.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No tags found for "{query}"
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredTags.map((tag) => {
              const isSelected = selectedTags.some(t => t.id === tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`w-full px-4 py-3 text-left transition-colors duration-150 flex items-center space-x-3 ${
                    isSelected 
                      ? 'bg-blue-100 border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}} // Handled by button click
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  {showIcons && (
                    <span className="text-xl" role="img" aria-label={tag.name}>
                      {tag.iconUrl}
                    </span>
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{tag.name}</div>
                    <div className="text-sm text-gray-500">{tag.description}</div>
                  </div>
                  {tag.color && (
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: tag.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default TagSelector;
