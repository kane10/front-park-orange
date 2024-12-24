export const VEHICLE_STATUS = {
  AVAILABLE: 'available',
  MAINTENANCE: 'maintenance',
  RESERVED: 'reserved',
  IMMOBILIZED: 'immobilized',
} as const;

export const VEHICLE_MODELS = [
  'Toyota Land Cruiser',
  'Toyota Hilux',
  'Nissan Patrol',
  'Toyota Prado',
  'Renault Duster',
  'Mitsubishi L200',
] as const;

export const VEHICLE_TYPES = [
  'Berline',
  'SUV',
  'Pick-up',
  'Citadine',
  'Utilitaire',
] as const;

export const LOCATIONS = [
  'Conakry',
  'Kindia',
  'Boké',
  'Mamou',
  'Labé',
  'Kankan',
  'N\'Zérékoré',
  'Faranah',
] as const;

export const ENERGY_TYPES = [
  'Diesel',
  'Essence',
  'Hybride',
  'Électrique',
] as const;

export const DEPARTMENTS = [
  'Service Commercial',
  'Service Technique',
  'Direction',
  'Ressources Humaines',
  'Service Informatique',
  'Service Financier',
] as const;

export const DRIVERS = [
  { id: 'D001', name: 'Mamadou Diallo' },
  { id: 'D002', name: 'Ibrahim Soumah' },
  { id: 'D003', name: 'Fatoumata Camara' },
  { id: 'D004', name: 'Aissatou Barry' },
  { id: 'D005', name: 'Ousmane Sylla' },
] as const;

export const mockVehicles = [
  {
    id: '1',
    model: 'Toyota Land Cruiser',
    plate: 'RC 1234 A',
    type: 'SUV',
    status: 'available',
    chassisNumber: 'ABC123XYZ456789',
    color: 'Blanc',
    power: 200,
    energy: 'Diesel',
    serviceDate: '2024-01-01',
    age: 2,
    assignmentZone: 'Conakry',
    responsibleDriver: 'John Doe',
    department: 'Service Commercial',
    lastMaintenanceDate: '2024-02-15',
    lastMaintenanceMileage: 5000,
    currentMileage: 5500,
    dealer: 'Toyota Guinée',
    purchasePrice: 75000000
  },
  {
    id: '2',
    model: 'Toyota Hilux',
    plate: 'RC 5678 B',
    type: 'Pick-up',
    status: 'maintenance',
    chassisNumber: 'DEF456UVW789012',
    color: 'Gris',
    power: 180,
    energy: 'Diesel',
    serviceDate: '2023-06-01',
    age: 3,
    assignmentZone: 'Kindia',
    responsibleDriver: 'Jane Smith',
    department: 'Service Technique',
    lastMaintenanceDate: '2024-03-01',
    lastMaintenanceMileage: 15000,
    currentMileage: 15200,
    dealer: 'Toyota Guinée',
    purchasePrice: 65000000
  }
];