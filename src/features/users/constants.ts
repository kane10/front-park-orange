import { User, UserRole } from './types';

export const USER_ROLES: Record<string, UserRole> = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER',
  MANAGER: 'ROLE_MANAGER',
} as const;

export const DEPARTMENTS = [
  'Service Commercial',
  'Service Technique',
  'Direction',
  'Ressources Humaines',
  'Service Informatique',
  'Service Financier',
] as const;

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Abdoulaye Kane',
    email: 'a.kane@orange-sonatel.com',
    matricule: 'EMP001',
    department: 'Service Commercial',
    role: 'ROLE_ADMIN',
    status: 'active',
  },
  {
    id: '2',
    name: 'Fatoumata Camara',
    email: 'f.camara@orange-sonatel.com',
    matricule: 'EMP002',
    department: 'Service Technique',
    role: 'ROLE_USER',
    status: 'active',
  },
  {
    id: '3',
    name: 'Ibrahim Soumah',
    email: 'i.soumah@orange-sonatel.com',
    matricule: 'EMP003',
    department: 'Direction',
    role: 'ROLE_MANAGER',
    status: 'active',
  },
];