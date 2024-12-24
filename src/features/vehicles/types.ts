export interface Vehicle {
  id: string;
  model: string;
  plate: string;
  type: string;
  status: 'available' | 'maintenance' | 'reserved' | 'immobilized';
  chassisNumber: string;
  color: string;
  power: number;
  energy: string;
  serviceDate: string;
  age: number;
  assignmentZone: string;
  responsibleDriver: string;
  department: string;
  lastMaintenanceDate: string;
  lastMaintenanceMileage: number;
  currentMileage: number;
  dealer: string;
  purchasePrice: number;
}

export interface VehicleFormData {
  model: string;
  customModel: string;
  plate: string;
  type: string;
  customType: string;
  status: 'available' | 'maintenance' | 'reserved' | 'immobilized';
  chassisNumber: string;
  color: string;
  power: number;
  energy: string;
  serviceDate: string;
  age: number;
  assignmentZone: string;
  responsibleDriver: string;
  department: string;
  lastMaintenanceDate: string;
  lastMaintenanceMileage: number;
  currentMileage: number;
  dealer: string;
  purchasePrice: number;
}