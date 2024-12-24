import React from 'react';
import { Car, Calendar, MapPin, Clock } from 'lucide-react';
import { Reservation } from '../types';
import { formatDateTime } from '../../../utils/dateUtils';
import { getStatusColor } from '../../../utils/statusUtils';

interface ReservationCardProps {
  reservation: Reservation;
}

export function ReservationCard({ reservation }: ReservationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-[--orange-primary]" />
          </div>
          <div>
            <h3 className="font-medium text-[--gray-700]">{reservation.vehicle.model}</h3>
            <p className="text-sm text-[--gray-500]">{reservation.vehicle.plate}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(reservation.status)}`}>
          {reservation.status.replace('_', ' ').toUpperCase()}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Période</p>
            <p className="text-sm text-[--gray-500]">
              Du {formatDateTime(reservation.startDate)}
              <br />
              Au {formatDateTime(reservation.endDate)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Localité</p>
            <p className="text-sm text-[--gray-500]">{reservation.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-[--gray-400]" />
          <div>
            <p className="text-sm font-medium text-[--gray-700]">Utilisateur</p>
            <p className="text-sm text-[--gray-500]">{reservation.user.name}</p>
            <p className="text-xs text-[--gray-400]">
              Matricule: {reservation.user.matricule}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}