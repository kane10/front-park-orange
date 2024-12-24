import React from 'react';
import { VehicleFormData } from '../../types';
import { LOCATIONS, DEPARTMENTS, DRIVERS } from '../../constants';

interface VehicleAssignmentInfoProps {
  formData: VehicleFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function VehicleAssignmentInfo({ formData, onChange }: VehicleAssignmentInfoProps) {
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
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={onChange}
          className="form-select"
          required
        >
          <option value="">Sélectionner un service</option>
          {DEPARTMENTS.map((department) => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="responsibleDriver" className="form-label">Chauffeur responsable</label>
        <select
          id="responsibleDriver"
          name="responsibleDriver"
          value={formData.responsibleDriver}
          onChange={onChange}
          className="form-select"
          required
        >
          <option value="">Sélectionner un chauffeur</option>
          {DRIVERS.map((driver) => (
            <option key={driver.id} value={driver.name}>{driver.name}</option>
          ))}
        </select>
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