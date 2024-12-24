import React, { useState } from 'react';
import { User, Mail, Badge, Building, Shield, Calendar, Phone, Pencil } from 'lucide-react';
import { PasswordChangeModal } from '../features/users/components/PasswordChangeModal';
import { ProfileEditModal } from '../features/users/components/ProfileEditModal';

export function Profile() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock user data - In a real app, this would come from your auth context/API
  const [user, setUser] = useState({
    name: 'Abdoulaye Kane',
    email: 'a.kane@orange.com',
    matricule: 'EMP001',
    department: 'Service Commercial',
    role: 'ROLE_ADMIN',
    phone: '+224 621234567',
    joinDate: '2022-01-15',
    status: 'active'
  });

  const handlePasswordChange = (oldPassword: string, newPassword: string) => {
    // Implement password change logic here
    console.log('Changing password:', { oldPassword, newPassword });
    setIsPasswordModalOpen(false);
  };

  const handleProfileUpdate = (name: string, phone: string) => {
    setUser(prev => ({
      ...prev,
      name,
      phone
    }));
    setIsEditModalOpen(false);
  };

  const sections = [
    {
      title: 'Informations personnelles',
      fields: [
        { icon: User, label: 'Nom complet', value: user.name },
        { icon: Mail, label: 'Email', value: user.email },
        { icon: Phone, label: 'Téléphone', value: user.phone },
        { icon: Badge, label: 'Matricule', value: user.matricule },
      ]
    },
    {
      title: 'Informations professionnelles',
      fields: [
        { icon: Building, label: 'Service', value: user.department },
        { icon: Shield, label: 'Rôle', value: user.role.replace('ROLE_', '') },
        { icon: Calendar, label: "Date d'entrée", value: new Date(user.joinDate).toLocaleDateString('fr-GN') }
      ]
    }
  ];

  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[--gray-700]">Mon Profil</h1>
        <p className="text-[--gray-500]">Gérez vos informations personnelles</p>
      </div>

      <div className="grid gap-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow-sm border border-[--gray-300] overflow-hidden">
            <div className="p-6 border-b border-[--gray-200] flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[--gray-700]">{section.title}</h2>
              {section.title === 'Informations personnelles' && (
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="p-2 text-[--gray-600] hover:text-[--orange-primary] hover:bg-[--gray-100] rounded-lg transition-colors"
                >
                  <Pencil className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field) => (
                  <div key={field.label} className="flex items-center gap-3">
                    <div className="p-2 bg-[--gray-100] rounded-lg">
                      <field.icon className="w-5 h-5 text-[--orange-primary]" />
                    </div>
                    <div>
                      <p className="text-sm text-[--gray-500]">{field.label}</p>
                      <p className="font-medium text-[--gray-700]">{field.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] overflow-hidden">
          <div className="p-6 border-b border-[--gray-200]">
            <h2 className="text-lg font-semibold text-[--gray-700]">Sécurité</h2>
          </div>
          <div className="p-6">
            <button 
              className="btn-primary"
              onClick={() => setIsPasswordModalOpen(true)}
            >
              Changer le mot de passe
            </button>
          </div>
        </div>
      </div>

      <PasswordChangeModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSubmit={handlePasswordChange}
      />

      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleProfileUpdate}
        initialData={{
          name: user.name,
          phone: user.phone
        }}
      />
    </main>
  );
}