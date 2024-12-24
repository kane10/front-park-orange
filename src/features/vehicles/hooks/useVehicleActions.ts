import { useState } from 'react';
import { Vehicle } from '../types';
import { useModal } from '../../../hooks/useModal';
import { useVehicleForm } from './useVehicleForm';

export function useVehicleActions() {
  const { isOpen, mode, openModal, closeModal } = useModal();
  const {
    formData,
    showCustomModel,
    showCustomType,
    handleChange,
    handleModelChange,
    handleTypeChange,
    resetForm,
    setFormData,
  } = useVehicleForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'edit') {
      console.log('Update vehicle:', formData);
    } else {
      console.log('Create vehicle:', formData);
    }
    closeModal();
    resetForm();
  };

  const handleEdit = (vehicle: Vehicle) => {
    setFormData(vehicle);
    openModal('edit');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      console.log('Delete vehicle:', id);
    }
  };

  return {
    isOpen,
    mode,
    formData,
    showCustomModel,
    showCustomType,
    handleSubmit,
    handleChange,
    handleModelChange,
    handleTypeChange,
    handleEdit,
    handleDelete,
    openModal,
    closeModal,
    resetForm,
  };
}