import { useState, useMemo } from 'react';
import { Driver } from '../types';

export function useDriverSearch(drivers: Driver[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      const searchValue = searchTerm.toLowerCase();
      return (
        // Recherche prioritaire par matricule
        driver.matricule.toLowerCase().includes(searchValue) ||
        // Recherche secondaire par nom et email
        driver.name.toLowerCase().includes(searchValue) ||
        driver.email.toLowerCase().includes(searchValue)
      );
    });
  }, [drivers, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredDrivers,
  };
}