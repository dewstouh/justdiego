import { useState, useRef, useEffect } from 'react';

interface Option {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  color?: string;
}

interface SearchableSelectProps {
  options: Option[];
  selectedIds: string[];
  onSelectionChange: (selectedIds: string[]) => void;
  placeholder?: string;
  title?: string;
}

export default function SearchableSelect({
  options,
  selectedIds,
  onSelectionChange,
  placeholder = "Search and select...",
  title = "Select Items"
}: SearchableSelectProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (option.description && option.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const unselectedOptions = filteredOptions.filter(option => 
    !selectedIds.includes(option.id)
  );

  const selectedOptions = options.filter(option => 
    selectedIds.includes(option.id)
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < unselectedOptions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev > 0 ? prev - 1 : unselectedOptions.length - 1
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0 && unselectedOptions[highlightedIndex]) {
      e.preventDefault();
      handleSelect(unselectedOptions[highlightedIndex]!);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const handleSelect = (option: Option) => {
    if (!selectedIds.includes(option.id)) {
      onSelectionChange([...selectedIds, option.id]);
    }
    setSearchTerm('');
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleRemove = (optionId: string) => {
    onSelectionChange(selectedIds.filter(id => id !== optionId));
  };

  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
      highlightedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex, isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        
        {/* Selected items */}
        {selectedOptions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedOptions.map(option => (
              <div
                key={option.id}
                className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                <span>{option.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(option.id)}
                  className="text-blue-600 hover:text-blue-800 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Search input */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
              setHighlightedIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* Dropdown */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {unselectedOptions.length > 0 ? (
                <ul ref={listRef} className="py-1">
                  {unselectedOptions.map((option, index) => (
                    <li
                      key={option.id}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        index === highlightedIndex ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => handleSelect(option)}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{option.name}</span>
                        {option.description && (
                          <span className="text-sm text-gray-500">
                            - {option.description}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-2 text-gray-500">
                  {searchTerm ? 'No matching options found' : 'No more options available'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
