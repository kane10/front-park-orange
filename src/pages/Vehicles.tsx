import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from '../components/common/Modal';
import { VehicleList } from '../features/vehicles/components/VehicleList';
import { VehicleFilters } from '../features/vehicles/components/VehicleFilters';
import { VehicleModal } from '../features/vehicles/components/VehicleModal';
import { VehicleDetails } from '../features/vehicles/components/details/VehicleDetails';
import { Vehicle } from '../types/vehicle';
import { useVehicleSearch } from '../features/vehicles/hooks/useVehicleSearch';
import { useVehicleActions } from '../features/vehicles/hooks/useVehicleActions';
import { mockVehicles } from '../features/vehicles/constants';

export function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    filteredVehicles,
  } = useVehicleSearch(mockVehicles);

  const {
    isOpen,
    mode,
    formData,
    showCustomModel,
    showCustomType,
    handleSubmit,
    handleChange,
    handleModelChange,
    handleTypeChange,
    handleEdit,
    handleDelete,
    openModal,
    closeModal,
    resetForm,
  } = useVehicleActions();

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setShowDetails(true);
  };

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--gray-700]">Véhicules</h1>
          <p className="text-[--gray-500]">Gestion du parc automobile</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            openModal('add');
          }}
          className="btn-primary inline-flex items-center gap-2 self-start sm:self-center"
        >
          <Plus className="w-5 h-5" />
          Ajouter un véhicule
        </button>
      </div>

      <VehicleFilters
        searchTerm={searchTerm}
        selectedStatus={selectedStatus}
        onSearchChange={setSearchTerm}
        onStatusChange={setSelectedStatus}
      />

      <VehicleList
        vehicles={filteredVehicles}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      <VehicleModal
        isOpen={isOpen}
        mode={mode}
        formData={formData}
        showCustomModel={showCustomModel}
        showCustomType={showCustomType}
        onClose={closeModal}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onModelChange={handleModelChange}
        onTypeChange={handleTypeChange}
      />

      <Modal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title="Détails du véhicule"
      >
        {selectedVehicle && (
          <VehicleDetails 
            vehicle={selectedVehicle}
            onClose={() => setShowDetails(false)}
          />
        )}
      </Modal>
    </main>
  );
}