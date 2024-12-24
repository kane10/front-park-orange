import React from 'react';
import { Modal } from '../../../components/common/Modal';
import { VehicleForm } from './form/VehicleForm';
import { VehicleFormData } from '../types';

interface VehicleModalProps {
  isOpen: boolean;
  mode: 'add' | 'edit';
  formData: VehicleFormData;
  showCustomModel: boolean;
  showCustomType: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function VehicleModal({
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
}: VehicleModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'edit' ? 'Modifier le véhicule' : 'Ajouter un véhicule'}
    >
      <VehicleForm
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