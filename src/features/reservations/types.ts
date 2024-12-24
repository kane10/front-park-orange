export interface Reservation {
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
  endDate: string;
  location: string;
  status: 'en_cours' | 'à_venir' | 'terminé';
}