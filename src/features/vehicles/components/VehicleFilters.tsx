import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { VEHICULE_STATUS } from '../../../constants/vehiculeConstants';
import { getStatusText } from '../../../utils/statusUtils';

interface VehicleFiltersProps {
  searchTerm: string;
  selectedStatus: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export function VehicleFilters({
  searchTerm,
  selectedStatus,
  onSearchChange,
  onStatusChange,
}: VehicleFiltersProps) {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-[--gray-300]">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
            <input
              type="text"
              placeholder="Rechercher par immatriculation (ex: AK 2024)..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
            />
          </div>
        </div>
        <div className="w-full sm:w-48">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
            <select
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none appearance-none"
            >
              <option value="all">Tous les statuts</option>
              {Object.entries(VEHICULE_STATUS).map(([key, value]) => (
                <option key={key} value={value}>
                  {getStatusText(value)}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}