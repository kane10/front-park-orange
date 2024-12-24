import React from 'react';
import { VehiculeCard } from './VehiculeCard';
import { Vehicule } from '../../../types/vehicule';

interface VehiculeListProps {
  vehicules: Vehicule[];
  onEdit: (vehicule: Vehicule) => void;
  onDelete: (id: string) => void;
  onViewDetails: (vehicule: Vehicule) => void;
}

export function VehiculeList({ vehicules, onEdit, onDelete, onViewDetails }: VehiculeListProps) {
  if (vehicules.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-[--gray-300]">
        <p className="text-[--gray-500]">Aucun véhicule trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {vehicules.map((vehicule) => (
        <VehiculeCard
          key={vehicule.id}
          vehicule={vehicule}
          onEdit={onEdit}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}