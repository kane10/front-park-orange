import React, { useState } from 'react';
import { Users as UsersIcon, UserPlus, Search } from 'lucide-react';
import { Modal } from '../components/common/Modal';
import { UserForm } from '../features/users/components/UserForm';
import { UserList } from '../features/users/components/UserList';
import { UserDetails } from '../features/users/components/details/UserDetails';
import { useModal } from '../hooks/useModal';
import { useUserForm } from '../features/users/hooks/useUserForm';
import { useUserSearch } from '../features/users/hooks/useUserSearch';
import { User } from '../features/users/types';
import { mockUsers } from '../features/users/constants';

export function Users() {
  const { isOpen, mode, openModal, closeModal } = useModal();
  const { formData, setFormData, handleChange, resetForm } = useUserForm();
  const { searchTerm, setSearchTerm, filteredUsers } = useUserSearch(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'edit') {
      console.log('Mise à jour utilisateur:', formData);
    } else {
      console.log('Création utilisateur:', formData);
    }
    closeModal();
    resetForm();
  };

  const handleEdit = (user: User) => {
    setFormData({
      name: user.name,
      email: user.email,
      matricule: user.matricule,
      department: user.department,
      role: user.role,
      password: '', // Le mot de passe n'est pas inclus lors de la modification
    });
    openModal('edit');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      console.log('Suppression utilisateur:', id);
    }
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--gray-700]">Utilisateurs</h1>
          <p className="text-[--gray-500]">Gestion des utilisateurs</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            openModal('add');
          }}
          className="btn-primary inline-flex items-center gap-2 self-start sm:self-center"
        >
          <UserPlus className="w-5 h-5" />
          Ajouter un utilisateur
        </button>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-[--gray-300]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
          <input
            type="text"
            placeholder="Rechercher par matricule (ex: EMP001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <UserList
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={mode === 'edit' ? "Modifier l'utilisateur" : 'Ajouter un utilisateur'}
      >
        <UserForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
          mode={mode}
        />
      </Modal>

      <Modal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title="Détails de l'utilisateur"
      >
        {selectedUser && (
          <UserDetails 
            user={selectedUser}
            onClose={() => setShowDetails(false)}
          />
        )}
      </Modal>
    </main>
  );
}