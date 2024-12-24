import React from 'react';
import { FileText, Download, Filter } from 'lucide-react';

export function Reports() {
  return (
    <main className="p-6 lg:ml-64 mt-16">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[--gray-700]">Rapports</h1>
        <p className="text-[--gray-500]">Génération et consultation des rapports</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[--gray-400]" />
              <select className="w-full pl-10 pr-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none appearance-none">
                <option>Tous les rapports</option>
                <option>Rapports mensuels</option>
                <option>Rapports d'utilisation</option>
                <option>Rapports de maintenance</option>
              </select>
            </div>
            <button className="btn-primary inline-flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Générer un rapport
            </button>
          </div>
        </div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-[--gray-300] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[--gray-100] rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[--orange-primary]" />
                </div>
                <div>
                  <h3 className="font-medium text-[--gray-700]">Rapport mensuel - Mars 2024</h3>
                  <p className="text-sm text-[--gray-500]">Généré le 01/03/2024</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-[--orange-primary] hover:text-[--orange-secondary]">
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Télécharger</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}