import React from 'react';
import { ReservationCard } from './ReservationCard';
import { Reservation } from '../types';

interface ReservationListProps {
  reservations: Reservation[];
}

export function ReservationList({ reservations }: ReservationListProps) {
  if (reservations.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-[--gray-300]">
        <p className="text-[--gray-500]">Aucune réservation trouvée</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {reservations.map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}