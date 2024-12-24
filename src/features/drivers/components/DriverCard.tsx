import React from 'react';
import { User, Phone, Mail, Building, Pencil, Trash2, Eye, FileCheck } from 'lucide-react';
import { Driver } from '../types';

interface DriverCardProps {
  driver: Driver;
  onEdit: (driver: Driver) => void;
  onDelete: (id: string) => void;
  onViewDetails: (driver: Driver) => void;
}

export function DriverCard({ driver, onEdit, onDelete, onViewDetails }: DriverCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-[--orange-primary]" />
          </div>
          <div>
            <h3 className="font-medium text-[--gray-700]">{driver.name}</h3>
            <p className="text-sm text-[--gray-500]">Matricule: {driver.matricule}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewDetails(driver)}
            className="icon-button icon-button-primary"
            title="Voir détails"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => onEdit(driver)}
            className="icon-button icon-button-primary"
            title="Modifier"
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(driver.id)}
            className="icon-button icon-button-danger"
            title="Supprimer"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Permis</p>
            <p className="text-sm text-[--gray-500]">{driver.licenseType}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Téléphone</p>
            <p className="text-sm text-[--gray-500]">{driver.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Email</p>
            <p className="text-sm text-[--gray-500]">{driver.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Building className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Service</p>
            <p className="text-sm text-[--gray-500]">{driver.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}