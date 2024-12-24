import React from 'react';
import { User } from '../../../../types/user';
import { Users, Mail, Badge, Building, Shield, Activity, Pencil } from 'lucide-react';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
  onEdit?: () => void;
}

export function UserDetails({ user, onClose, onEdit }: UserDetailsProps) {
  const sections = [
    {
      title: 'Informations personnelles',
      items: [
        { 
          icon: Users,
          label: 'Nom complet',
          value: user.name,
          className: 'col-span-2'
        },
        { 
          icon: Mail,
          label: 'Email',
          value: user.email,
          className: 'col-span-2'
        },
        { 
          icon: Badge,
          label: 'Matricule',
          value: user.matricule
        },
      ],
    },
    {
      title: 'Informations professionnelles',
      items: [
        { 
          icon: Building,
          label: 'Service',
          value: user.department,
          className: 'col-span-2'
        },
        { 
          icon: Shield,
          label: 'Rôle',
          value: user.role.replace('ROLE_', ''),
        },
        { 
          icon: Activity,
          label: 'Statut',
          value: user.status === 'active' ? 'Actif' : 'Inactif',
          className: user.status === 'active' ? 'text-green-600' : 'text-red-600'
        },
      ],
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex justify-between items-center border-b border-[--gray-200] pb-2">
            <h3 className="text-lg font-semibold text-[--gray-700]">{section.title}</h3>
            {section.title === 'Informations personnelles' && onEdit && (
              <button
                onClick={onEdit}
                className="inline-flex items-center gap-2 text-[--orange-primary] hover:text-[--orange-secondary]"
              >
                <Pencil className="w-4 h-4" />
                <span>Modifier mon profil</span>
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {section.items.map((item) => (
              <div key={item.label} className={`space-y-2 ${item.className || ''}`}>
                <div className="flex items-center gap-2 text-[--gray-500]">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <p className={`font-medium text-[--gray-700] ${item.className || ''}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-end pt-6 border-t border-[--gray-200]">
        <button
          onClick={onClose}
          className="bg-[--orange-primary] text-white px-6 py-2 rounded-lg hover:bg-[--orange-secondary] transition-colors font-bold"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}