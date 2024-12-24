import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SearchableSelect } from '../../../components/common/SearchableSelect';
import { mockUsers } from '../../users/constants';
import { mockVehicles } from '../../vehicles/constants';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ReservationFormData) => void;
}

interface ReservationFormData {
  userId: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  location: string;
}

const initialFormData: ReservationFormData = {
  userId: '',
  vehicleId: '',
  startDate: '',
  endDate: '',
  location: '',
};

export function ReservationModal({ isOpen, onClose, onSubmit }: ReservationModalProps) {
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  const userOptions = mockUsers.map(user => ({
    id: user.id,
    label: `${user.matricule} - ${user.name} (${user.department})`,
    searchValue: `${user.matricule} ${user.name} ${user.department}`,
  }));

  const vehicleOptions = mockVehicles
    .filter(vehicle => vehicle.status === 'available')
    .map(vehicle => ({
      id: vehicle.id,
      label: `${vehicle.model} - ${vehicle.plate}`,
      searchValue: `${vehicle.model} ${vehicle.plate}`,
    }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl my-8">
        <div className="flex items-center justify-between p-6 border-b border-[--gray-200]">
          <h2 className="text-xl font-semibold text-[--gray-700]">Nouvelle réservation</h2>
          <button
            onClick={onClose}
            className="text-[--gray-400] hover:text-[--gray-600]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SearchableSelect
              options={userOptions}
              value={formData.userId}
              onChange={(value) => setFormData(prev => ({ ...prev, userId: value }))}
              placeholder="Sélectionner un utilisateur"
              label="Utilisateur"
              searchPlaceholder="Rechercher par matricule ou nom..."
            />

            <SearchableSelect
              options={vehicleOptions}
              value={formData.vehicleId}
              onChange={(value) => setFormData(prev => ({ ...prev, vehicleId: value }))}
              placeholder="Sélectionner un véhicule"
              label="Véhicule"
              searchPlaceholder="Rechercher par immatriculation..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-[--gray-600] mb-1">
                Date de départ
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-[--gray-600] mb-1">
                Date de retour
              </label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate}
                className="form-input"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-[--gray-600] mb-1">
              Localité
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Saisir la localité"
              className="form-input"
              required
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-[--gray-200]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[--gray-700] hover:bg-[--gray-100] rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Réserver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}