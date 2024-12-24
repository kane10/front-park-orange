import React from 'react';
import { UserFormData } from '../../types/user';
import { DEPARTMENTS } from '../../constants/userConstants';

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
        {/* ... autres champs ... */}

        {!isEdit && (
          <div>
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
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