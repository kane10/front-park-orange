import React from 'react';
import { UserCard } from './UserCard';
import { User } from '../../../types/user';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
  onViewDetails: (user: User) => void;
}

export function UserList({ users, onEdit, onDelete, onViewDetails }: UserListProps) {
  if (users.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg border border-[--gray-300]">
        <p className="text-[--gray-500]">Aucun utilisateur trouvé</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}