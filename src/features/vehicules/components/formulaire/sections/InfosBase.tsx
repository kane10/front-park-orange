import React from 'react';
import { VehiculeFormData } from '../../../../../types/vehicule';
import { VEHICULE_MODELS, VEHICULE_TYPES } from '../../../constants';

interface InfosBaseProps {
  formData: VehiculeFormData;
  showCustomModel: boolean;
  showCustomType: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function InfosBase({
  formData,
  showCustomModel,
  showCustomType,
  onChange,
  onModelChange,
  onTypeChange,
}: InfosBaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* ... autres champs ... */}

      <div>
        <label htmlFor="plate" className="form-label">Immatriculation</label>
        <input
          type="text"
          id="plate"
          name="plate"
          value={formData.plate}
          onChange={onChange}
          className="form-input"
          placeholder="AK 2024"
          required
        />
      </div>

      {/* ... autres champs ... */}
    </div>
  );
}