import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VehicleUsageChart() {
  const data = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
    datasets: [
      {
        label: 'Véhicules utilisés',
        data: [12, 19, 15, 17, 14],
        backgroundColor: 'rgba(255, 121, 0, 0.8)',
        borderColor: 'rgba(255, 121, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Véhicules disponibles',
        data: [8, 5, 7, 3, 6],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
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
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
      },
      x: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}