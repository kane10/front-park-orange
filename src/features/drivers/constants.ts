export const LICENSE_TYPES = [
  'A',
  'B',
  'C',
  'D',
  'E'
] as const;

export const DEPARTMENTS = [
  'Service Commercial',
  'Service Technique',
  'Direction',
  'Ressources Humaines',
  'Service Informatique',
  'Service Financier',
] as const;

export const mockDrivers = [
  {
    id: 'D001',
    name: 'Mamadou Diallo',
    matricule: 'DRV001',
    licenseNumber: 'L123456',
    licenseType: 'C',
    phone: '+224 621234567',
    email: 'mamadou.diallo@orange.com',
    department: 'Service Commercial',
    status: 'active',
    joinDate: '2022-01-15'
  },
  {
    id: 'D002',
    name: 'Ibrahim Soumah',
    matricule: 'DRV002',
    licenseNumber: 'L789012',
    licenseType: 'D',
    phone: '+224 622345678',
    email: 'ibrahim.soumah@orange.com',
    department: 'Service Technique',
    status: 'active',
    joinDate: '2022-03-20'
  }
] as const;