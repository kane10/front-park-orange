export interface MaintenanceRecord {
  id: string;
  vehicleId: string;
  vehicleInfo: {
    model: string;
    plate: string;
  };
  type: 'maintenance' | 'repair';
  description: string;
  date: string;
  cost: number;
  status: 'planned' | 'in_progress' | 'completed';
  provider: string;
  mileage: number;
  nextMaintenanceMileage?: number;
  nextMaintenanceDate?: string;
}

export interface MaintenanceFormData {
  vehicleId: string;
  type: 'maintenance' | 'repair';
  description: string;
  date: string;
  cost: number;
  provider: string;
  mileage: number;
  nextMaintenanceMileage?: number;
  nextMaintenanceDate?: string;
}