import React from 'react';
import { BarChart, PieChart, LineChart, TrendingUp } from 'lucide-react';
import { VehicleUsageChart } from '../components/charts/VehicleUsageChart';
import { VehicleTypeChart } from '../components/charts/VehicleTypeChart';

export function Statistics() {
  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[--gray-700]">Statistiques</h1>
        <p className="text-[--gray-500]">Analyse des données du parc automobile</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[--gray-700]">Utilisation des véhicules</h2>
            <div className="p-2 bg-[--gray-100] rounded-lg">
              <BarChart className="w-5 h-5 text-[--orange-primary]" />
            </div>
          </div>
          <div className="h-64">
            <VehicleUsageChart />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[--gray-700]">Répartition par type</h2>
            <div className="p-2 bg-[--gray-100] rounded-lg">
              <PieChart className="w-5 h-5 text-[--orange-primary]" />
            </div>
          </div>
          <div className="h-64">
            <VehicleTypeChart />
          </div>
        </div>
      </div>
    </main>
  );
}