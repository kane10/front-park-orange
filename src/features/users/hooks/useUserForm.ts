import { useState } from 'react';
import { UserFormData } from '../types';

const initialFormData: UserFormData = {
  name: '',
  email: '',
  password: '',
  matricule: '',
  department: '',
  role: 'ROLE_USER',
};

export function useUserForm() {
  const [formData, setFormData] = useState<UserFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    setFormData,
    handleChange,
    resetForm,
    initialFormData,
  };
}