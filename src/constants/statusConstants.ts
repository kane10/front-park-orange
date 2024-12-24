export const REQUEST_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export const getStatusColor = (status: string) => {
  const colors = {
    pending: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    approved: 'text-green-600 bg-green-50 border-green-200',
    rejected: 'text-red-600 bg-red-50 border-red-200',
    active: 'text-blue-600 bg-blue-50 border-blue-200',
    completed: 'text-gray-600 bg-gray-50 border-gray-200',
    available: 'text-green-600 bg-green-50 border-green-200',
    maintenance: 'text-orange-600 bg-orange-50 border-orange-200',
    reserved: 'text-blue-600 bg-blue-50 border-blue-200',
    immobilized: 'text-red-600 bg-red-50 border-red-200',
  };
  return colors[status as keyof typeof colors] || colors.pending;
};

export const getStatusText = (status: string) => {
  const texts = {
    pending: 'En attente',
    approved: 'Approuvée',
    rejected: 'Refusée',
    active: 'En cours',
    completed: 'Terminée',
    available: 'Disponible',
    maintenance: 'En maintenance',
    reserved: 'Réservé',
    immobilized: 'Immobilisé',
  };
  return texts[status as keyof typeof texts] || status;
};