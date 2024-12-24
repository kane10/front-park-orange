import { useState, useMemo } from 'react';
import { User } from '../types';

export function useUserSearch(users: User[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = searchTerm.toLowerCase();
      return (
        // Recherche prioritaire par matricule
        user.matricule.toLowerCase().includes(searchValue) ||
        // Recherche secondaire par nom et email
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue)
      );
    });
  }, [users, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers,
  };
}