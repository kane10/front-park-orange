export const mockReservations = [
  {
    id: '1',
    user: { 
      name: 'Mamadou Diallo', 
      matricule: 'EMP001', 
      department: 'Service Commercial' 
    },
    vehicle: { 
      model: 'Toyota Land Cruiser', 
      plate: 'AK 2024' 
    },
    startDate: '2024-03-15T09:00',
    endDate: '2024-03-18T18:00',
    location: 'Conakry',
    status: 'en_cours'
  },
  {
    id: '2',
    user: { 
      name: 'Fatoumata Camara', 
      matricule: 'EMP002', 
      department: 'Service Technique' 
    },
    vehicle: { 
      model: 'Toyota Hilux', 
      plate: 'AK 2025' 
    },
    startDate: '2024-03-20T08:00',
    endDate: '2024-03-22T17:00',
    location: 'Kindia',
    status: 'à_venir'
  },
  {
    id: '3',
    user: { 
      name: 'Ibrahim Soumah', 
      matricule: 'EMP003', 
      department: 'Direction' 
    },
    vehicle: { 
      model: 'Nissan Patrol', 
      plate: 'AK 2026' 
    },
    startDate: '2024-03-10T10:00',
    endDate: '2024-03-12T16:00',
    location: 'Mamou',
    status: 'terminé'
  }
];