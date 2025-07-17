"use client";

import { useState, useRef, useEffect } from 'react';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface SearchableCountrySelectProps {
  countries: Country[];
  selectedCountryId: string;
  onSelectionChange: (countryId: string) => void;
  placeholder?: string;
  title?: string;
}

export default function SearchableCountrySelect({
  countries,
  selectedCountryId,
  onSelectionChange,
  placeholder = "Search for a country...",
  title = "COUNTRY"
}: SearchableCountrySelectProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountry = countries.find(country => country.id === selectedCountryId);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (countryId: string) => {
    onSelectionChange(countryId);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-bold text-gray-700 mb-2">{title} *</label>
      
      {/* Selected country display */}
      {selectedCountry && (
        <div className="mb-2 p-3 border-2 border-green-300 bg-green-50 rounded">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{selectedCountry.flag}</span>
            <span className="font-medium text-gray-900">{selectedCountry.name}</span>
          </div>
        </div>
      )}

      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
        />
        
        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-300 max-h-60 overflow-y-auto">
            {filteredCountries.length === 0 ? (
              <div className="p-3 text-gray-500 text-center">
                No countries found
              </div>
            ) : (
              filteredCountries.map((country) => (
                <div
                  key={country.id}
                  onClick={() => handleCountrySelect(country.id)}
                  className={`p-3 cursor-pointer hover:bg-gray-100 flex items-center space-x-2 ${
                    selectedCountryId === country.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-medium">{country.name}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
