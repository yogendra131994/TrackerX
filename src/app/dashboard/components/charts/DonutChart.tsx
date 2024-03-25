'use client';
import type { ChartData, ChartOptions } from 'chart.js';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data: ChartData<'doughnut'> = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
      ],
      borderWidth: 1,
      borderRadius: 5,
      spacing: 10,
      hoverBorderColor: '#fff',
      hoverBorderWidth: 2,
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  cutout: 70,
};

export function DonutChart() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-[200px] w-full">
        <Doughnut
          height={'100%'}
          width={'100%'}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
