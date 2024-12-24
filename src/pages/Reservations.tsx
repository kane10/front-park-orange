import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { ReservationList } from '../features/reservations/components/ReservationList';
import { ReservationModal } from '../features/reservations/components/ReservationModal';
import { mockReservations } from '../features/reservations/constants';

export function Reservations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredReservations = mockReservations.filter(reservation => 
    reservation.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.user.matricule.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.vehicle.plate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (formData: any) => {
    console.log('Nouvelle réservation:', formData);
    setIsModalOpen(false);
  };

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[--gray-700]">Réservations</h1>
          <p className="text-[--gray-500]">Gestion des réservations de véhicules</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-primary inline-flex items-center gap-2 self-start sm:self-center"
        >
          <Plus className="w-5 h-5" />
          Nouvelle réservation
        </button>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-[--gray-300]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
          <input
            type="text"
            placeholder="Rechercher par matricule, nom ou immatriculation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <ReservationList reservations={filteredReservations} />

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </main>
  );
}