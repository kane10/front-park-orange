import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function VehicleTypeChart() {
  const data = {
    labels: ['Berlines', 'SUV', 'Utilitaires', 'Citadines'],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          'rgba(255, 121, 0, 0.8)',
          'rgba(241, 110, 0, 0.8)',
          'rgba(255, 149, 51, 0.8)',
          'rgba(255, 178, 102, 0.8)'
        ],
        borderColor: [
          'rgba(255, 121, 0, 1)',
          'rgba(241, 110, 0, 1)',
          'rgba(255, 149, 51, 1)',
          'rgba(255, 178, 102, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}