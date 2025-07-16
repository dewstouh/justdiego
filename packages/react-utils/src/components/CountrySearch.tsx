import React from 'react';
import { useCountrySearch } from '../hooks/useCountrySearch';
import type { Prisma } from '@justdiego/db';

interface CountrySearchProps {
  onCountrySelect?: (country: Prisma.CountryCreateInput) => void;
  placeholder?: string;
  limit?: number;
  showFlags?: boolean;
  className?: string;
}

export function CountrySearch({
  onCountrySelect,
  placeholder = "Search countries...",
  limit = 50,
  showFlags = true,
  className = ""
}: CountrySearchProps) {
  const {
    query,
    setQuery,
    filteredCountries,
    isSearching,
    totalCount,
    filteredCount,
    clearSearch
  } = useCountrySearch({ limit });

  const handleCountryClick = (country: Prisma.CountryCreateInput) => {
    onCountrySelect?.(country);
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
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
          <span>Found {filteredCount} countries</span>
        ) : (
          <span>Showing all {totalCount} countries</span>
        )}
        {limit && filteredCount >= limit && (
          <span className="text-orange-600"> (showing first {limit})</span>
        )}
      </div>

      {/* Countries List */}
      <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
        {filteredCountries.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No countries found for "{query}"
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountryClick(country)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3"
              >
                {showFlags && (
                  <span className="text-2xl" role="img" aria-label={`${country.name} flag`}>
                    {country.flag}
                  </span>
                )}
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{country.name}</div>
                  <div className="text-sm text-gray-500 uppercase">{country.code}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountrySearch;
