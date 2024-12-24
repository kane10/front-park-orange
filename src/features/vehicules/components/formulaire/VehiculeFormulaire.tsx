import React from 'react';
import { VehiculeFormData } from '../../../../types/vehicule';
import { InfosBase } from './sections/InfosBase';
import { InfosTechniques } from './sections/InfosTechniques';
import { InfosAffectation } from './sections/InfosAffectation';

interface VehiculeFormulaireProps {
  formData: VehiculeFormData;
  mode: 'ajout' | 'modification';
  showCustomModel: boolean;
  showCustomType: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClose: () => void;
}

export function VehiculeFormulaire({
  formData,
  mode,
  showCustomModel,
  showCustomType,
  onSubmit,
  onChange,
  onModelChange,
  onTypeChange,
  onClose,
}: VehiculeFormulaireProps) {
  return (
    <form onSubmit={onSubmit} className="p-6 space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-[--gray-700] mb-4">Informations de base</h3>
        <InfosBase
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
        <InfosTechniques
          formData={formData}
          onChange={onChange}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[--gray-700] mb-4">Affectation</h3>
        <InfosAffectation
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
          {mode === 'modification' ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
}