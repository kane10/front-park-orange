import { useState, useMemo } from 'react';
import { Vehicle } from '../types';

export function useVehicleSearch(vehicles: Vehicle[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Recherche par immatriculation (insensible à la casse)
      const matchesPlate = vehicle.plate.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Recherche par modèle (comme backup, insensible à la casse)
      const matchesModel = vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Vérifie si le statut correspond
      const matchesStatus = selectedStatus === 'all' || vehicle.status === selectedStatus;

      return (matchesPlate || matchesModel) && matchesStatus;
    });
  }, [vehicles, searchTerm, selectedStatus]);

  return {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    filteredVehicles,
  };
}