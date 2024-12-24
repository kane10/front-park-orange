import React, { useState } from 'react';
import { Plus, Search, Filter, ChevronDown } from 'lucide-react';
import { MaintenanceCard } from '../features/maintenance/components/MaintenanceCard';
import { MaintenanceRecord } from '../features/maintenance/types';

const mockMaintenanceRecords: MaintenanceRecord[] = [
  {
    id: '1',
    vehicleId: '1',
    vehicleInfo: {
      model: 'Toyota Land Cruiser',
      plate: 'RC 1234 A'
    },
    type: 'maintenance',
    description: 'Révision périodique - Vidange huile et filtres',
    date: '2024-03-15',
    cost: 750000,
    status: 'completed',
    provider: 'Garage Toyota',
    mileage: 5000,
    nextMaintenanceMileage: 10000,
    nextMaintenanceDate: '2024-06-15'
  },
  {
    id: '2',
    vehicleId: '2',
    vehicleInfo: {
      model: 'Toyota Hilux',
      plate: 'RC 5678 B'
    },
    type: 'repair',
    description: 'Remplacement des plaquettes de frein',
    date: '2024-03-20',
    cost: 450000,
    status: 'in_progress',
    provider: 'Garage Central',
    mileage: 15000
  }
];

export function Maintenance() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const handleEdit = (record: MaintenanceRecord) => {
    console.log('Edit maintenance record:', record);
  };

  const handleDelete = (id: string) => {
    console.log('Delete maintenance record:', id);
  };

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--gray-700]">Maintenance</h1>
          <p className="text-[--gray-500]">Gestion des entretiens et réparations</p>
        </div>
        <button className="btn-primary inline-flex items-center gap-2 self-start sm:self-center">
          <Plus className="w-5 h-5" />
          Nouvelle intervention
        </button>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-[--gray-300]">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
              <input
                type="text"
                placeholder="Rechercher une intervention..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div className="w-full sm:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none appearance-none"
              >
                <option value="all">Tous les types</option>
                <option value="maintenance">Maintenance</option>
                <option value="repair">Réparation</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {mockMaintenanceRecords.map((record) => (
          <MaintenanceCard
            key={record.id}
            record={record}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}