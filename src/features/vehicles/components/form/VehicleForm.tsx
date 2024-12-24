import React from 'react';
import { VehicleFormData } from '../../types';
import { VehicleBasicInfo } from './VehicleBasicInfo';
import { VehicleTechnicalInfo } from './VehicleTechnicalInfo';
import { VehicleAssignmentInfo } from './VehicleAssignmentInfo';

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
  return (
    <form onSubmit={onSubmit} className="p-6 space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-[--gray-700] mb-4">Informations de base</h3>
        <VehicleBasicInfo
          formData={formData}
          showCustomModel={showCustomModel}
          showCustomType={showCustomType}
          onChange={onChange}
          onModelChange={onModelChange}
          onTypeChange={onTypeChange}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[--gray-700] mb-4">Informations techniques</h3>
        <VehicleTechnicalInfo
          formData={formData}
          onChange={onChange}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[--gray-700] mb-4">Affectation</h3>
        <VehicleAssignmentInfo
          formData={formData}
          onChange={onChange}
        />
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