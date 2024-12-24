import React from 'react';
import { Vehicule } from '../../../../types/vehicule';
import { formatDate } from '../../../../utils/dateUtils';
import { formatNumber } from '../../../../utils/numberUtils';

interface DetailsVehiculeProps {
  vehicule: Vehicule;
}

export function DetailsVehicule({ vehicule }: DetailsVehiculeProps) {
  const sections = [
    {
      title: 'Informations de base',
      items: [
        { label: 'Modèle', value: vehicule.model },
        { label: 'Type', value: vehicule.type },
        { label: 'Immatriculation', value: vehicule.plate },
        { label: 'Numéro de châssis', value: vehicule.chassisNumber },
      ],
    },
    {
      title: 'Informations techniques',
      items: [
        { label: 'Couleur', value: vehicule.color },
        { label: 'Puissance', value: `${vehicule.power} CV` },
        { label: 'Énergie', value: vehicule.energy },
        { label: 'Kilométrage', value: `${formatNumber(vehicule.currentMileage)} km` },
      ],
    },
    {
      title: 'Affectation',
      items: [
        { label: 'Zone', value: vehicule.assignmentZone },
        { label: 'Service', value: vehicule.department },
        { label: 'Chauffeur', value: vehicule.responsibleDriver },
        { label: 'Date de mise en service', value: formatDate(vehicule.serviceDate) },
      ],
    },
    {
      title: 'Maintenance',
      items: [
        { label: 'Dernière maintenance', value: formatDate(vehicule.lastMaintenanceDate) },
        { label: 'Kilométrage dernière maintenance', value: `${formatNumber(vehicule.lastMaintenanceMileage)} km` },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold text-[--gray-700] mb-4">{section.title}</h3>
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
    </div>
  );
}