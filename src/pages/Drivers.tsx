import React, { useState } from 'react';
import { UserPlus, Search } from 'lucide-react';
import { Modal } from '../components/common/Modal';
import { DriverList } from '../features/drivers/components/DriverList';
import { DriverForm } from '../features/drivers/components/DriverForm';
import { DriverDetails } from '../features/drivers/components/DriverDetails';
import { Driver, DriverFormData } from '../features/drivers/types';
import { useDriverSearch } from '../features/drivers/hooks/useDriverSearch';
import { mockDrivers } from '../features/drivers/constants';

const initialFormData: DriverFormData = {
  name: '',
  matricule: '',
  licenseNumber: '',
  licenseType: '',
  phone: '',
  email: '',
  department: '',
  joinDate: '',
};

export function Drivers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [formData, setFormData] = useState<DriverFormData>(initialFormData);
  const { searchTerm, setSearchTerm, filteredDrivers } = useDriverSearch(mockDrivers);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'edit') {
      console.log('Mise à jour chauffeur:', formData);
    } else {
      console.log('Création chauffeur:', formData);
    }
    setIsModalOpen(false);
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (driver: Driver) => {
    setFormData({
      name: driver.name,
      matricule: driver.matricule,
      licenseNumber: driver.licenseNumber,
      licenseType: driver.licenseType,
      phone: driver.phone,
      email: driver.email,
      department: driver.department,
      joinDate: driver.joinDate,
    });
    setMode('edit');
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce chauffeur ?')) {
      console.log('Suppression chauffeur:', id);
    }
  };

  const handleViewDetails = (driver: Driver) => {
    setSelectedDriver(driver);
    setIsDetailsModalOpen(true);
  };

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--gray-700]">Chauffeurs</h1>
          <p className="text-[--gray-500]">Gestion des chauffeurs</p>
        </div>
        <button
          onClick={() => {
            setMode('add');
            setFormData(initialFormData);
            setIsModalOpen(true);
          }}
          className="btn-primary inline-flex items-center gap-2 self-start sm:self-center"
        >
          <UserPlus className="w-5 h-5" />
          Ajouter un chauffeur
        </button>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-[--gray-300]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
          <input
            type="text"
            placeholder="Rechercher par matricule (ex: DRV001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <DriverList
        drivers={filteredDrivers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={mode === 'edit' ? 'Modifier le chauffeur' : 'Ajouter un chauffeur'}
      >
        <DriverForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
          mode={mode}
        />
      </Modal>

      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title="Détails du chauffeur"
      >
        {selectedDriver && (
          <DriverDetails 
            driver={selectedDriver}
            onClose={() => setIsDetailsModalOpen(false)}
          />
        )}
      </Modal>
    </main>
  );
}