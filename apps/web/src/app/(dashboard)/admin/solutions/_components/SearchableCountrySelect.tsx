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
  title = "Select Country"
}: SearchableCountrySelectProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCountry = countries.find(country => country.id === selectedCountryId);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < filteredCountries.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev > 0 ? prev - 1 : filteredCountries.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredCountries.length) {
        handleSelect(filteredCountries[highlightedIndex]!.id);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
      setHighlightedIndex(-1);
    }
  };

  const handleSelect = (countryId: string) => {
    onSelectionChange(countryId);
    setIsOpen(false);
    setSearchTerm('');
    setHighlightedIndex(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleClear = () => {
    onSelectionChange('');
    setSearchTerm('');
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }
  }, [highlightedIndex]);

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-bold text-gray-700 mb-2">{title} *</label>
      
      {/* Selected Country Display */}
      {selectedCountry && !isOpen && (
        <div className="mb-2 p-3 border-2 border-green-300 bg-green-50 rounded flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="font-medium text-gray-900">{selectedCountry.name}</span>
          </div>
          <button
            type="button"
            onClick={handleClear}
            className="text-red-600 hover:text-red-800 font-bold ml-2"
          >
            Clear
          </button>
        </div>
      )}

      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder={selectedCountry ? `${selectedCountry.flag} ${selectedCountry.name}` : placeholder}
          className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
        />
        
        {/* Dropdown arrow */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white border-2 border-gray-300 max-h-60 overflow-y-auto">
          {filteredCountries.length > 0 ? (
            <ul ref={listRef} className="divide-y divide-gray-200">
              {filteredCountries.map((country, index) => (
                <li key={country.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(country.id)}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                      index === highlightedIndex ? 'bg-gray-100' : ''
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="font-medium text-gray-900">{country.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-gray-500">No countries found</div>
          )}
        </div>
      )}
    </div>
  );
}
