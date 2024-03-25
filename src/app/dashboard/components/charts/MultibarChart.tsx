// 'use client';
// import type { ChartData, ChartOptions } from 'chart.js';
// import {
//   CategoryScale,
//   Chart as ChartJS,
//   Legend,
//   LineElement,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
// } from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// );
// const LineChart = () => {
//   // Sample data for the chart
//   const data: ChartData<'line'> = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Income',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         borderWidth: 2,
//         borderColor: '#79ea86', // Change border color if needed
//         cubicInterpolationMode: 'monotone',
//       },
//       {
//         label: 'Expense',
//         data: [42, 68, 15, 72, 38, 84, 50],
//         borderWidth: 2,
//         borderColor: '#e75757',
//         cubicInterpolationMode: 'monotone',
//       },
//     ],
//   };

//   // Options for the chart
//   const options: ChartOptions<'line'> = {
//     animation: {
//       duration: 1000, // Animation duration in milliseconds
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="flex h-full w-full justify-center items-center">
//       <div className="h-[200px] w-full">
//         <Line height={'100%'} width={'100%'} data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default LineChart;

'use client';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

const MultiBarChart = () => {
  // Sample data for the chart
  const data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#79ea86', // Change bar color if needed
        borderRadius: 4,
        barThickness: 12,
      },
      {
        label: 'Expense',
        data: [42, 68, 15, 72, 38, 84, 50],
        backgroundColor: '#e75757',
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  // Options for the chart
  const options: ChartOptions<'bar'> = {
    animation: {
      duration: 1000, // Animation duration in milliseconds
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-[200px] w-full">
        <Bar height={'100%'} width={'100%'} data={data} options={options} />
      </div>
    </div>
  );
};

export default MultiBarChart;
