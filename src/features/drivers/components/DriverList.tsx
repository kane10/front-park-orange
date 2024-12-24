import React from 'react';
import { DriverCard } from './DriverCard';
import { Driver } from '../types';

interface DriverListProps {
  drivers: Driver[];
  onEdit: (driver: Driver) => void;
  onDelete: (id: string) => void;
  onViewDetails: (driver: Driver) => void;
}

export function DriverList({ drivers, onEdit, onDelete, onViewDetails }: DriverListProps) {
  if (drivers.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-[--gray-300]">
        <p className="text-[--gray-500]">Aucun chauffeur trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          onEdit={onEdit}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}