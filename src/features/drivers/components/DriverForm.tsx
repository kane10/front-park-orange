import React from 'react';
import { DriverFormData } from '../types';
import { LICENSE_TYPES, DEPARTMENTS } from '../constants';

interface DriverFormProps {
  formData: DriverFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  mode: 'add' | 'edit';
}

export function DriverForm({ formData, onChange, onSubmit, onClose, mode }: DriverFormProps) {
  return (
    <form onSubmit={onSubmit} className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="form-label">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="matricule" className="form-label">Matricule</label>
          <input
            type="text"
            id="matricule"
            name="matricule"
            value={formData.matricule}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="licenseNumber" className="form-label">Numéro de permis</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="licenseType" className="form-label">Type de permis</label>
          <select
            id="licenseType"
            name="licenseType"
            value={formData.licenseType}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Sélectionner un type</option>
            {LICENSE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="form-label">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="department" className="form-label">Service</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Sélectionner un service</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="joinDate" className="form-label">Date d'entrée</label>
          <input
            type="date"
            id="joinDate"
            name="joinDate"
            value={formData.joinDate}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t border-[--gray-200]">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-[--gray-700] hover:bg-[--gray-100] rounded-lg transition-colors font-bold"
        >
          Annuler
        </button>
        <button type="submit" className="btn-primary">
          {mode === 'edit' ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
}