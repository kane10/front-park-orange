import React from 'react';
import { Car, Calendar, MapPin, Wrench, Pencil, Trash2, Eye } from 'lucide-react';
import { Vehicule } from '../../../types/vehicule';
import { getStatusColor, getStatusText } from '../../../utils/statusUtils';
import { formatNumber } from '../../../utils/numberUtils';

interface VehiculeCardProps {
  vehicule: Vehicule;
  onEdit: (vehicule: Vehicule) => void;
  onDelete: (id: string) => void;
  onViewDetails: (vehicule: Vehicule) => void;
}

export function VehiculeCard({ vehicule, onEdit, onDelete, onViewDetails }: VehiculeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-[--orange-primary]" />
          </div>
          <div>
            <h3 className="font-medium text-[--gray-700]">{vehicule.model}</h3>
            <p className="text-sm text-[--gray-500]">{vehicule.plate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className={`status-badge ${getStatusColor(vehicule.status)}`}>
            {getStatusText(vehicule.status)}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(vehicule)}
              className="icon-button icon-button-primary"
              title="Voir détails"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => onEdit(vehicule)}
              className="icon-button icon-button-primary"
              title="Modifier"
            >
              <Pencil className="w-5 h-5" />
            </button>
            <button
              onClick={() => onDelete(vehicule.id)}
              className="icon-button icon-button-danger"
              title="Supprimer"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Mise en service</p>
            <p className="text-sm text-[--gray-500]">{vehicule.serviceDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Zone</p>
            <p className="text-sm text-[--gray-500]">{vehicule.assignmentZone}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Kilométrage</p>
            <p className="text-sm text-[--gray-500]">{formatNumber(vehicule.currentMileage)} km</p>
          </div>
        </div>
      </div>
    </div>
  );
}