import  { useState } from 'react';
import { Plus } from 'lucide-react';
import { VehiculeList } from '../features/vehicules/components/VehiculeList';
import { VehiculeFilters } from '../features/vehicules/components/VehiculeFilters';
import { ModalVehicule } from '../features/vehicules/components/formulaire/ModalVehicule';
import { Modal } from '../components/common/Modal';
import { DetailsVehicule } from '../features/vehicules/components/details/DetailsVehicule';
import { useVehiculeSearch } from '../features/vehicules/hooks/useVehiculeSearch';
import { useVehiculeActions } from '../features/vehicules/hooks/useVehiculeActions';
import { mockVehicules } from '../features/vehicules/constants';
import { Vehicule } from '../types/vehicule';

export function Vehicules() {
  const [selectedVehicule, setSelectedVehicule] = useState<Vehicule | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    filteredVehicules,
  } = useVehiculeSearch(mockVehicules);

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
  } = useVehiculeActions();

  const handleViewDetails = (vehicule: Vehicule) => {
    setSelectedVehicule(vehicule);
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
            openModal('ajout');
          }}
          className="btn-primary inline-flex items-center gap-2 self-start sm:self-center"
        >
          <Plus className="w-5 h-5" />
          Ajouter un véhicule
        </button>
      </div>

      <VehiculeFilters
        searchTerm={searchTerm}
        selectedStatus={selectedStatus}
        onSearchChange={setSearchTerm}
        onStatusChange={setSelectedStatus}
      />

      <VehiculeList
        vehicules={filteredVehicules}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      <ModalVehicule
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
        {selectedVehicule && <DetailsVehicule vehicule={selectedVehicule} />}
      </Modal>
    </main>
  );
}