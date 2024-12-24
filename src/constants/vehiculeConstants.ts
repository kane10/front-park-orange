export const VEHICULE_STATUS = {
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