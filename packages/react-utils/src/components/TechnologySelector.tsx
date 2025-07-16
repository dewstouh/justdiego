import React from 'react';
import { useTechnologySearch } from '../hooks/useTechnologySearch';
import type { Prisma } from '@justdiego/db';

interface TechnologySelectorProps {
  selectedTechnologies: Prisma.TechnologyCreateInput[];
  onTechnologiesChange: (technologies: Prisma.TechnologyCreateInput[]) => void;
  placeholder?: string;
  limit?: number;
  showIcons?: boolean;
  className?: string;
}

export function TechnologySelector({
  selectedTechnologies,
  onTechnologiesChange,
  placeholder = "Search technologies...",
  limit = 50,
  showIcons = true,
  className = ""
}: TechnologySelectorProps) {
  const {
    query,
    setQuery,
    filteredTechnologies,
    isSearching,
    totalCount,
    filteredCount,
    clearSearch
  } = useTechnologySearch({ limit, multiSelect: true });

  // Sync with parent state
  React.useEffect(() => {
    // Update parent when internal selection changes
    onTechnologiesChange(selectedTechnologies);
  }, [selectedTechnologies, onTechnologiesChange]);

  const handleTechToggle = (tech: Prisma.TechnologyCreateInput) => {
    const isSelected = selectedTechnologies.some(t => t.id === tech.id);
    if (isSelected) {
      onTechnologiesChange(selectedTechnologies.filter(t => t.id !== tech.id));
    } else {
      onTechnologiesChange([...selectedTechnologies, tech]);
    }
  };

  const removeTechnology = (techId: string) => {
    onTechnologiesChange(selectedTechnologies.filter(t => t.id !== techId));
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Selected Technologies */}
      {selectedTechnologies.length > 0 && (
        <div className="mb-4 p-3 border-2 border-blue-200 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-blue-900">
              Selected Technologies ({selectedTechnologies.length})
            </span>
            <button
              type="button"
              onClick={() => onTechnologiesChange([])}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold"
            >
              CLEAR ALL
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center space-x-2 px-3 py-1 bg-white border border-blue-300 rounded-full text-sm"
              >
                {showIcons && (
                  <span className="text-base" role="img" aria-label={tech.name}>
                    {tech.iconUrl}
                  </span>
                )}
                <span className="font-medium text-blue-900">{tech.name}</span>
                <button
                  type="button"
                  onClick={() => tech.id && removeTechnology(tech.id)}
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
          <span>Found {filteredCount} technologies</span>
        ) : (
          <span>Showing all {totalCount} technologies</span>
        )}
        {limit && filteredCount >= limit && (
          <span className="text-orange-600"> (showing first {limit})</span>
        )}
      </div>

      {/* Technologies List */}
      <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
        {filteredTechnologies.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No technologies found for "{query}"
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredTechnologies.map((tech) => {
              const isSelected = selectedTechnologies.some(t => t.id === tech.id);
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => handleTechToggle(tech)}
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
                    <span className="text-xl" role="img" aria-label={tech.name}>
                      {tech.iconUrl}
                    </span>
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{tech.name}</div>
                    <div className="text-sm text-gray-500">{tech.description}</div>
                  </div>
                  {tech.color && (
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: tech.color }}
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

export default TechnologySelector;
