import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  searchValue: string;
}

interface SearchableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  searchPlaceholder: string;
}

export function SearchableSelect({
  options,
  value,
  onChange,
  placeholder,
  label,
  searchPlaceholder
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.searchValue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find(option => option.id === value);

  return (
    <div className="relative" ref={wrapperRef}>
      <label className="block text-sm font-medium text-[--gray-600] mb-1">
        {label}
      </label>
      <div
        className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[--gray-300] rounded-lg shadow-lg">
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[--gray-400]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
                placeholder={searchPlaceholder}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <div
                key={option.id}
                className="px-4 py-2 hover:bg-[--gray-100] cursor-pointer"
                onClick={() => {
                  onChange(option.id);
                  setIsOpen(false);
                  setSearchTerm('');
                }}
              >
                {option.label}
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-2 text-[--gray-500] text-center">
                Aucun résultat
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}