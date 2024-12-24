import React from 'react';
import { Vehicle } from '../../../../types/vehicle';
import { formatDate } from '../../../../utils/dateUtils';
import { formatNumber } from '../../../../utils/numberUtils';
import { getStatusText } from '../../../../utils/statusUtils';

interface VehicleDetailsProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export function VehicleDetails({ vehicle, onClose }: VehicleDetailsProps) {
  const sections = [
    {
      title: 'Informations de base',
      items: [
        { label: 'Modèle', value: vehicle.model },
        { label: 'Type', value: vehicle.type },
        { label: 'Immatriculation', value: vehicle.plate },
        { label: 'Numéro de châssis', value: vehicle.chassisNumber },
        { label: 'Statut', value: getStatusText(vehicle.status) },
      ],
    },
    {
      title: 'Informations techniques',
      items: [
        { label: 'Couleur', value: vehicle.color },
        { label: 'Puissance', value: `${vehicle.power} CV` },
        { label: 'Énergie', value: vehicle.energy },
        { label: 'Kilométrage', value: `${formatNumber(vehicle.currentMileage)} km` },
        { label: 'Âge', value: `${vehicle.age} an${vehicle.age > 1 ? 's' : ''}` },
      ],
    },
    {
      title: 'Affectation',
      items: [
        { label: 'Zone', value: vehicle.assignmentZone },
        { label: 'Service', value: vehicle.department },
        { label: 'Chauffeur', value: vehicle.responsibleDriver },
        { label: 'Date de mise en service', value: formatDate(vehicle.serviceDate) },
      ],
    },
    {
      title: 'Maintenance',
      items: [
        { label: 'Dernière maintenance', value: formatDate(vehicle.lastMaintenanceDate) },
        { label: 'Kilométrage dernière maintenance', value: `${formatNumber(vehicle.lastMaintenanceMileage)} km` },
      ],
    },
    {
      title: 'Informations commerciales',
      items: [
        { label: 'Concessionnaire', value: vehicle.dealer },
        { label: 'Prix d\'achat', value: formatNumber(vehicle.purchasePrice) + ' GNF' },
      ],
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-lg font-semibold text-[--gray-700] border-b border-[--gray-200] pb-2">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-sm text-[--gray-500]">{item.label}</p>
                <p className="font-medium text-[--gray-700]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="flex justify-end pt-6 border-t border-[--gray-200]">
        <button
          onClick={onClose}
          className="bg-[--orange-primary] text-white px-6 py-2 rounded-lg hover:bg-[--orange-secondary] transition-colors font-bold"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}