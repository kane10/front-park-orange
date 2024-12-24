import React from 'react';
import { User } from '../../../../types/user';
import { Users, Mail, Badge, Building, Shield, Activity } from 'lucide-react';

interface DetailsUtilisateurProps {
  user: User;
}

export function DetailsUtilisateur({ user }: DetailsUtilisateurProps) {
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
          <h3 className="text-lg font-semibold text-[--gray-700] border-b border-[--gray-200] pb-2">
            {section.title}
          </h3>
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
    </div>
  );
}