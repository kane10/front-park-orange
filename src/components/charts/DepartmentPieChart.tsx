import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DepartmentPieChart() {
  const data = {
    labels: ['Service Commercial', 'Service Technique', 'Direction', 'Ressources Humaines'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          'rgba(255, 121, 0, 0.8)',  // Orange primary
          'rgba(241, 110, 0, 0.8)',  // Orange secondary
          'rgba(255, 149, 51, 0.8)', // Lighter orange
          'rgba(255, 178, 102, 0.8)' // Even lighter orange
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
      title: {
        display: false,
      },
    },
  };

  return <Pie data={data} options={options} />;
}