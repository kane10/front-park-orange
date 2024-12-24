import { useState } from 'react';
import { VehiculeFormData } from '../../../types/vehicule';

const initialFormData: VehiculeFormData = {
  model: '',
  customModel: '',
  plate: '',
  type: '',
  customType: '',
  status: 'available',
  chassisNumber: '',
  color: '',
  power: 0,
  energy: '',
  serviceDate: '',
  age: 0,
  assignmentZone: '',
  responsibleDriver: '',
  department: '',
  lastMaintenanceDate: '',
  lastMaintenanceMileage: 0,
  currentMileage: 0,
  dealer: '',
  purchasePrice: 0,
};

export function useVehiculeForm() {
  const [formData, setFormData] = useState<VehiculeFormData>(initialFormData);
  const [showCustomModel, setShowCustomModel] = useState(false);
  const [showCustomType, setShowCustomType] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const isOther = value === 'other';
    setShowCustomModel(isOther);
    setFormData((prev) => ({
      ...prev,
      model: value,
      // Si "Autre" est sélectionné, on garde la valeur personnalisée
      // Sinon, on utilise la valeur sélectionnée et on réinitialise le champ personnalisé
      customModel: isOther ? prev.customModel : '',
    }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const isOther = value === 'other';
    setShowCustomType(isOther);
    setFormData((prev) => ({
      ...prev,
      type: value,
      // Si "Autre" est sélectionné, on garde la valeur personnalisée
      // Sinon, on utilise la valeur sélectionnée et on réinitialise le champ personnalisé
      customType: isOther ? prev.customType : '',
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setShowCustomModel(false);
    setShowCustomType(false);
  };

  return {
    formData,
    showCustomModel,
    showCustomType,
    handleChange,
    handleModelChange,
    handleTypeChange,
    resetForm,
    setFormData,
  };
}