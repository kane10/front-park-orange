export interface UserFormData {
  name: string;
  email: string;
  password: string;
  matricule: string;
  department: string;
  role: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  matricule: string;
  department: string;
  role: string;
  status: 'active' | 'inactive';
}