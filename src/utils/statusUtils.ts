export const getStatusColor = (status: string) => {
  const colors = {
    // Statuts des véhicules
    available: 'bg-green-50 text-green-600 border-green-200',
    maintenance: 'bg-orange-50 text-orange-600 border-orange-200',
    reserved: 'bg-blue-50 text-blue-600 border-blue-200',
    immobilized: 'bg-red-50 text-red-600 border-red-200',
    
    // Statuts des réservations
    en_cours: 'bg-blue-50 text-blue-600 border-blue-200',
    à_venir: 'bg-amber-50 text-amber-600 border-amber-200',
    terminé: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  };
  return colors[status as keyof typeof colors] || colors.available;
};

export const getStatusText = (status: string) => {
  const texts = {
    // Statuts des véhicules
    available: 'Disponible',
    maintenance: 'En maintenance',
    reserved: 'Réservé',
    immobilized: 'Immobilisé',
    
    // Statuts des réservations
    en_cours: 'EN COURS',
    à_venir: 'À VENIR',
    terminé: 'TERMINÉ'
  };
  return texts[status as keyof typeof texts] || status;
};