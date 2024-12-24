import React from 'react';
import { VehicleFormData } from '../../types/vehicle';
import { VEHICLE_MODELS, VEHICLE_TYPES, LOCATIONS, ENERGY_TYPES } from '../../constants/vehicleConstants';

interface VehicleFormProps {
  formData: VehicleFormData;
  mode: 'add' | 'edit';
  showCustomModel: boolean;
  showCustomType: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClose: () => void;
}

export function VehicleForm({
  formData,
  mode,
  showCustomModel,
  showCustomType,
  onSubmit,
  onChange,
  onModelChange,
  onTypeChange,
  onClose,
}: VehicleFormProps) {
  const isEdit = mode === 'edit';

  return (
    <form onSubmit={onSubmit} className="p-6 space-y-6">
      {/* ... reste du formulaire ... */}
      
      <div className="flex justify-end gap-4 pt-6 border-t border-[--gray-200]">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-[--gray-700] hover:bg-[--gray-100] rounded-lg transition-colors font-bold"
        >
          Annuler
        </button>
        <button type="submit" className="btn-primary">
          {isEdit ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
}