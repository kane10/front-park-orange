import { useState } from 'react';
import { Vehicule } from '../../../types/vehicule';
import { useModal } from '../../../hooks/useModal';
import { useVehiculeForm } from './useVehiculeForm';

export function useVehiculeActions() {
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
  } = useVehiculeForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'modification') {
      console.log('Mise à jour du véhicule:', formData);
    } else {
      console.log('Création du véhicule:', formData);
    }
    closeModal();
    resetForm();
  };

  const handleEdit = (vehicule: Vehicule) => {
    setFormData(vehicule);
    openModal('modification');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      console.log('Suppression du véhicule:', id);
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