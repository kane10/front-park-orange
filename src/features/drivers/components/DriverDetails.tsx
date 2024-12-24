import React from 'react';
import { User, Phone, Mail, Building, FileCheck, Calendar } from 'lucide-react';
import { Driver } from '../types';
import { formatDate } from '../../../utils/dateUtils';

interface DriverDetailsProps {
  driver: Driver;
  onClose: () => void;
}

export function DriverDetails({ driver, onClose }: DriverDetailsProps) {
  const sections = [
    {
      title: 'Informations personnelles',
      items: [
        { icon: User, label: 'Nom complet', value: driver.name },
        { icon: FileCheck, label: 'Matricule', value: driver.matricule },
        { icon: Phone, label: 'Téléphone', value: driver.phone },
        { icon: Mail, label: 'Email', value: driver.email },
      ]
    },
    {
      title: 'Informations professionnelles',
      items: [
        { icon: Building, label: 'Service', value: driver.department },
        { icon: FileCheck, label: 'Type de permis', value: driver.licenseType },
        { icon: FileCheck, label: 'Numéro de permis', value: driver.licenseNumber },
        { icon: Calendar, label: "Date d'entrée", value: formatDate(driver.joinDate) },
      ]
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-lg font-semibold text-[--gray-700] border-b border-[--gray-200] pb-2">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="p-2 bg-[--gray-100] rounded-lg">
                  <item.icon className="w-5 h-5 text-[--orange-primary]" />
                </div>
                <div>
                  <p className="text-sm text-[--gray-500]">{item.label}</p>
                  <p className="font-medium text-[--gray-700]">{item.value}</p>
                </div>
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