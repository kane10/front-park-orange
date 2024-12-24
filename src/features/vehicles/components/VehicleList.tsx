import React from 'react';
import { VehicleCard } from './VehicleCard';
import { Vehicle } from '../../../types/vehicle';

interface VehicleListProps {
  vehicles: Vehicle[];
  onEdit: (vehicle: Vehicle) => void;
  onDelete: (id: string) => void;
  onViewDetails: (vehicle: Vehicle) => void;
}

export function VehicleList({ vehicles, onEdit, onDelete, onViewDetails }: VehicleListProps) {
  if (vehicles.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-[--gray-300]">
        <p className="text-[--gray-500]">Aucun véhicule trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onEdit={onEdit}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}