import React from 'react';
import { VehiculeFormData } from '../../../../../types/vehicule';
import { LOCATIONS } from '../../../constants';

interface InfosAffectationProps {
  formData: VehiculeFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function InfosAffectation({ formData, onChange }: InfosAffectationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="assignmentZone" className="form-label">Zone d'affectation</label>
        <select
          id="assignmentZone"
          name="assignmentZone"
          value={formData.assignmentZone}
          onChange={onChange}
          className="form-select"
          required
        >
          <option value="">Sélectionner une zone</option>
          {LOCATIONS.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="department" className="form-label">Service</label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={onChange}
          className="form-input"
          required
        />
      </div>

      <div>
        <label htmlFor="responsibleDriver" className="form-label">Chauffeur responsable</label>
        <input
          type="text"
          id="responsibleDriver"
          name="responsibleDriver"
          value={formData.responsibleDriver}
          onChange={onChange}
          className="form-input"
          required
        />
      </div>

      <div>
        <label htmlFor="serviceDate" className="form-label">Date de mise en service</label>
        <input
          type="date"
          id="serviceDate"
          name="serviceDate"
          value={formData.serviceDate}
          onChange={onChange}
          className="form-input"
          required
        />
      </div>
    </div>
  );
}