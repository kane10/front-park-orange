import React from 'react';
import { VehicleFormData } from '../../types';
import { VEHICLE_MODELS, VEHICLE_TYPES, VEHICULE_STATUS } from '../../../../constants/vehiculeConstants';
import { getStatusText } from '../../../../utils/statusUtils';

interface VehicleBasicInfoProps {
  formData: VehicleFormData;
  showCustomModel: boolean;
  showCustomType: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function VehicleBasicInfo({
  formData,
  showCustomModel,
  showCustomType,
  onChange,
  onModelChange,
  onTypeChange,
}: VehicleBasicInfoProps) {
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