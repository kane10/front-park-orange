import React from 'react';
import { Modal } from '../../../../components/common/Modal';
import { VehiculeFormulaire } from './VehiculeFormulaire';
import { VehiculeFormData } from '../../../../types/vehicule';

interface ModalVehiculeProps {
  isOpen: boolean;
  mode: 'ajout' | 'modification';
  formData: VehiculeFormData;
  showCustomModel: boolean;
  showCustomType: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function ModalVehicule({
  isOpen,
  mode,
  formData,
  showCustomModel,
  showCustomType,
  onClose,
  onSubmit,
  onChange,
  onModelChange,
  onTypeChange,
}: ModalVehiculeProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'modification' ? 'Modifier le véhicule' : 'Ajouter un véhicule'}
    >
      <VehiculeFormulaire
        formData={formData}
        mode={mode}
        showCustomModel={showCustomModel}
        showCustomType={showCustomType}
        onSubmit={onSubmit}
        onChange={onChange}
        onModelChange={onModelChange}
        onTypeChange={onTypeChange}
        onClose={onClose}
      />
    </Modal>
  );
}