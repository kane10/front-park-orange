import React from 'react';
import { Users, Pencil, Trash2, Eye } from 'lucide-react';
import { User } from '../../../types/user';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
  onViewDetails: (user: User) => void;
}

export function UserCard({ user, onEdit, onDelete, onViewDetails }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-[--orange-primary]" />
          </div>
          <div>
            <h3 className="font-medium text-[--gray-700]">{user.name}</h3>
            <p className="text-sm text-[--gray-500]">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewDetails(user)}
            className="icon-button icon-button-primary"
            title="Voir détails"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => onEdit(user)}
            className="icon-button icon-button-primary"
            title="Modifier"
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="icon-button icon-button-danger"
            title="Supprimer"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <span className="text-[--gray-500]">Matricule:</span>
          <span className="ml-2 font-medium">{user.matricule}</span>
        </div>
        <div>
          <span className="text-[--gray-500]">Service:</span>
          <span className="ml-2 font-medium">{user.department}</span>
        </div>
        <div>
          <span className="text-[--gray-500]">Rôle:</span>
          <span className="ml-2 font-medium">
            {user.role.replace('ROLE_', '')}
          </span>
        </div>
      </div>
    </div>
  );
}