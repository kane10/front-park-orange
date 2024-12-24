export type UserRole = 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_MANAGER';

export interface UserFormData {
  name: string;
  email: string;
  password: string;
  matricule: string;
  department: string;
  role: UserRole;
}

export interface User extends Omit<UserFormData, 'password'> {
  id: string;
  status: 'active' | 'inactive';
}