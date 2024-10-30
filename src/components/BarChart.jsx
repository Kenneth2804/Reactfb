import React from 'react'
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
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
  
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


export default function BarChart() {
  return (
    <div>
    <h2>Gráfico de Barras</h2>
    <Bar data={data} options={options} />
  </div>
  )
}
