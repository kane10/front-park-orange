import { useState, useMemo } from 'react';
import { Vehicule } from '../../../types/vehicule';

export function useVehiculeSearch(vehicules: Vehicule[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredVehicules = useMemo(() => {
    return vehicules.filter((vehicule) => {
      const matchesSearch = 
        vehicule.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicule.plate.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        selectedStatus === 'all' || vehicule.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [vehicules, searchTerm, selectedStatus]);

  return {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    filteredVehicules,
  };
}