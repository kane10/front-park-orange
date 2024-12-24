import React from 'react';
import { UserFormData } from '../types';
import { DEPARTMENTS, USER_ROLES } from '../constants';

interface UserFormProps {
  formData: UserFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  mode: 'add' | 'edit';
}

export function UserForm({ formData, onChange, onSubmit, onClose, mode }: UserFormProps) {
  const isEdit = mode === 'edit';

  return (
    <form onSubmit={onSubmit} className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="form-label">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="form-input"
            placeholder="user@orange-sonatel.com"
            required
          />
        </div>

        <div>
          <label htmlFor="matricule" className="form-label">Matricule</label>
          <input
            type="text"
            id="matricule"
            name="matricule"
            value={formData.matricule}
            onChange={onChange}
            className="form-input"
            required
          />
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
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="role" className="form-label">Rôle</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Sélectionner un rôle</option>
            {Object.entries(USER_ROLES).map(([key, value]) => (
              <option key={key} value={value}>{key}</option>
            ))}
          </select>
        </div>

        {!isEdit && (
          <div>
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="form-input"
              required
            />
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t border-[--gray-200]">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-[--gray-700] hover:bg-[--gray-100] rounded-lg transition-colors font-bold"
        >
          Annuler
        </button>
        <button type="submit" className="btn-primary">
          {isEdit ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
}