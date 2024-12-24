import React, { useState } from 'react';
import { Car, Calendar, User, Clock, CheckCircle, XCircle, Search, Filter, ChevronDown, MapPin } from 'lucide-react';

type RequestStatus = 'pending' | 'approved' | 'rejected' | 'active' | 'completed';

interface VehicleRequest {
  id: string;
  user: {
    name: string;
    matricule: string;
    department: string;
  };
  vehicle: {
    model: string;
    plate: string;
  };
  startDate: string;
  duration: number;
  purpose: string;
  location: string;
  status: RequestStatus;
}

const mockRequests: VehicleRequest[] = [
  {
    id: '1',
    user: { 
      name: 'Mamadou Diallo', 
      matricule: 'EMP001',
      department: 'Service Commercial' 
    },
    vehicle: { model: 'Toyota Land Cruiser', plate: 'RC 1234 A' },
    startDate: '2024-03-15',
    duration: 3,
    purpose: 'Mission commerciale à Kindia',
    location: 'Kindia',
    status: 'pending'
  },
  {
    id: '2',
    user: { 
      name: 'Fatoumata Camara', 
      matricule: 'EMP002',
      department: 'Service Technique' 
    },
    vehicle: { model: 'Toyota Hilux', plate: 'RC 5678 B' },
    startDate: '2024-03-16',
    duration: 1,
    purpose: 'Maintenance réseau à Mamou',
    location: 'Mamou',
    status: 'active'
  },
  {
    id: '3',
    user: { 
      name: 'Ibrahim Soumah', 
      matricule: 'EMP003',
      department: 'Direction' 
    },
    vehicle: { model: 'Nissan Patrol', plate: 'RC 9012 C' },
    startDate: '2024-03-18',
    duration: 5,
    purpose: 'Visite des installations à N\'Zérékoré',
    location: 'N\'Zérékoré',
    status: 'approved'
  }
];

export function Assignments() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: RequestStatus) => {
    const colors = {
      pending: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      approved: 'text-green-600 bg-green-50 border-green-200',
      rejected: 'text-red-600 bg-red-50 border-red-200',
      active: 'text-blue-600 bg-blue-50 border-blue-200',
      completed: 'text-gray-600 bg-gray-50 border-gray-200'
    };
    return colors[status];
  };

  const getStatusText = (status: RequestStatus) => {
    const texts = {
      pending: 'En attente',
      approved: 'Approuvée',
      rejected: 'Refusée',
      active: 'En cours',
      completed: 'Terminée'
    };
    return texts[status];
  };

  const handleApprove = (id: string) => {
    console.log('Approve request:', id);
  };

  const handleReject = (id: string) => {
    console.log('Reject request:', id);
  };

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[--gray-700]">Demandes de véhicules</h1>
        <p className="text-[--gray-500]">Gestion des demandes et mises à disposition</p>
      </div>

      {/* Filters */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-[--gray-300]">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
              <input
                type="text"
                placeholder="Rechercher une demande..."
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
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none appearance-none"
              >
                <option value="all">Tous les statuts</option>
                <option value="pending">En attente</option>
                <option value="approved">Approuvées</option>
                <option value="active">En cours</option>
                <option value="completed">Terminées</option>
                <option value="rejected">Refusées</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="grid gap-4">
        {mockRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-[--orange-primary]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-[--gray-700]">{request.vehicle.model}</h3>
                    <span className="text-sm text-[--gray-500]">({request.vehicle.plate})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[--gray-500]">
                    <User className="w-4 h-4" />
                    <span>{request.user.name}</span>
                    <span className="text-[--gray-400]">•</span>
                    <span className="text-xs">Matricule: {request.user.matricule}</span>
                    <span className="text-[--gray-400]">•</span>
                    <span>{request.user.department}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[--gray-400]" />
                  <span className="text-sm text-[--gray-600]">
                    {new Date(request.startDate).toLocaleDateString('fr-GN')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[--gray-400]" />
                  <span className="text-sm text-[--gray-600]">
                    {request.duration} jour{request.duration > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[--gray-400]" />
                  <span className="text-sm text-[--gray-600]">{request.location}</span>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                  {getStatusText(request.status)}
                </span>
              </div>

              {request.status === 'pending' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Approuver</span>
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <XCircle className="w-5 h-5" />
                    <span>Refuser</span>
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-[--gray-200]">
              <p className="text-sm text-[--gray-600]">
                <span className="font-medium">Motif :</span> {request.purpose}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}