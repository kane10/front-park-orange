export interface Driver {
  id: string;
  name: string;
  matricule: string;
  licenseNumber: string;
  licenseType: string;
  phone: string;
  email: string;
  department: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

export interface DriverFormData {
  name: string;
  matricule: string;
  licenseNumber: string;
  licenseType: string;
  phone: string;
  email: string;
  department: string;
  joinDate: string;
}