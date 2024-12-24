import React from 'react';
import { VehiculeFormData } from '../../../../../types/vehicule';
import { ENERGY_TYPES } from '../../../constants';

interface InfosTechniquesProps {
  formData: VehiculeFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function InfosTechniques({ formData, onChange }: InfosTechniquesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="color" className="form-label">Couleur</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={onChange}
          className="form-input"
          required
        />
      </div>

      <div>
        <label htmlFor="power" className="form-label">Puissance (CV)</label>
        <input
          type="number"
          id="power"
          name="power"
          value={formData.power}
          onChange={onChange}
          className="form-input"
          min="0"
          required
        />
      </div>

      <div>
        <label htmlFor="energy" className="form-label">Énergie</label>
        <select
          id="energy"
          name="energy"
          value={formData.energy}
          onChange={onChange}
          className="form-select"
          required
        >
          <option value="">Sélectionner une énergie</option>
          {ENERGY_TYPES.map((energy) => (
            <option key={energy} value={energy}>{energy}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="currentMileage" className="form-label">Kilométrage actuel</label>
        <input
          type="number"
          id="currentMileage"
          name="currentMileage"
          value={formData.currentMileage}
          onChange={onChange}
          className="form-input"
          min="0"
          required
        />
      </div>
    </div>
  );
}