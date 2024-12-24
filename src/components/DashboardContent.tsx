import React from 'react';
import { Car, Users, Calendar, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

const stats = [
  {
    name: 'Véhicules Total',
    value: '124',
    icon: Car,
    change: '+4.75%',
    changeType: 'positive'
  },
  {
    name: 'Utilisateurs Actifs',
    value: '573',
    icon: Users,
    change: '+54.02%',
    changeType: 'positive'
  },
  {
    name: 'Réservations',
    value: '89',
    icon: Calendar,
    change: '-1.39%',
    changeType: 'negative'
  },
  {
    name: 'Maintenance',
    value: '12',
    icon: AlertTriangle,
    change: '+10.18%',
    changeType: 'negative'
  }
];

export function DashboardContent() {
  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[--gray-700]">Tableau de bord</h1>
        <p className="text-[--gray-500]">Vue d'ensemble du parc roulant</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white p-6 rounded-lg shadow-sm border border-[--gray-300]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[--gray-100] rounded-lg">
                <stat.icon className="w-6 h-6 text-[--orange-primary]" />
              </div>
              <span className={clsx(
                'text-sm font-medium',
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              )}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[--gray-700]">{stat.value}</h3>
            <p className="text-[--gray-500]">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[--gray-300]">
          <h2 className="text-lg font-semibold text-[--gray-700] mb-4">
            Véhicules Récents
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-[--gray-100] rounded-lg">
                <div className="w-12 h-12 bg-[--gray-200] rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-[--orange-primary]" />
                </div>
                <div>
                  <h4 className="font-medium text-[--gray-700]">Peugeot 308</h4>
                  <p className="text-sm text-[--gray-500]">AA-123-BB</p>
                </div>
                <span className="ml-auto text-sm font-medium text-green-600">
                  Disponible
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[--gray-300]">
          <h2 className="text-lg font-semibold text-[--gray-700] mb-4">
            Réservations à venir
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-[--gray-100] rounded-lg">
                <div className="w-12 h-12 bg-[--gray-200] rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[--orange-primary]" />
                </div>
                <div>
                  <h4 className="font-medium text-[--gray-700]">Citroën C3</h4>
                  <p className="text-sm text-[--gray-500]">14 Mars 2024</p>
                </div>
                <span className="ml-auto text-sm font-medium text-[--orange-primary]">
                  En attente
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}