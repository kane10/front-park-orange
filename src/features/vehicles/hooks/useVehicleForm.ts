import { useState } from 'react';
import { VehicleFormData } from '../types';

const initialFormData: VehicleFormData = {
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

export function useVehicleForm() {
  const [formData, setFormData] = useState<VehicleFormData>(initialFormData);
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
    setShowCustomModel(value === 'other');
    setFormData((prev) => ({
      ...prev,
      model: value,
    }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setShowCustomType(value === 'other');
    setFormData((prev) => ({
      ...prev,
      type: value,
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