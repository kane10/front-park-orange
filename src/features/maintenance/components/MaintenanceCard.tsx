import React from 'react';
import { Wrench, Calendar, Car, Banknote } from 'lucide-react'; // Changed from Tool to Wrench
// ... rest of the imports

export function MaintenanceCard({ record, onEdit, onDelete }: MaintenanceCardProps) {
  // ... rest of the code

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-[--orange-primary]" /> {/* Updated icon */}
          </div>
          {/* ... rest of the JSX */}
        </div>
      </div>
      {/* ... rest of the JSX */}
    </div>
  );
}