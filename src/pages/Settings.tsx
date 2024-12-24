import React from 'react';
import { Settings as SettingsIcon, Bell, Lock, User, Building, Globe } from 'lucide-react';

export function Settings() {
  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[--gray-700]">Paramètres</h1>
        <p className="text-[--gray-500]">Configuration du système</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] overflow-hidden">
          <div className="p-6 border-b border-[--gray-300]">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-[--gray-100] rounded-lg">
                <User className="w-5 h-5 text-[--orange-primary]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[--gray-700]">Profil</h2>
                <p className="text-sm text-[--gray-500]">Gérez vos informations personnelles</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[--gray-600] mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[--gray-600] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
                    placeholder="john.doe@orange.com"
                  />
                </div>
              </div>
              <button className="btn-primary w-fit">
                Sauvegarder les modifications
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] overflow-hidden">
          <div className="p-6 border-b border-[--gray-300]">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-[--gray-100] rounded-lg">
                <Bell className="w-5 h-5 text-[--orange-primary]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[--gray-700]">Notifications</h2>
                <p className="text-sm text-[--gray-500]">Gérez vos préférences de notification</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {['Réservations', 'Maintenance', 'Rapports'].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[--gray-700]">{item}</p>
                    <p className="text-sm text-[--gray-500]">Recevoir des notifications pour les {item.toLowerCase()}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[--gray-300] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-[--gray-300] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[--orange-primary]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] overflow-hidden">
          <div className="p-6 border-b border-[--gray-300]">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-[--gray-100] rounded-lg">
                <Lock className="w-5 h-5 text-[--orange-primary]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[--gray-700]">Sécurité</h2>
                <p className="text-sm text-[--gray-500]">Gérez vos paramètres de sécurité</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <button className="btn-primary">
              Changer le mot de passe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}