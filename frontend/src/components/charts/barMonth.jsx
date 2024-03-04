// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   elements: {
//     bar: {
//       borderWidth: 1,
//     },
//   },
//   responsive: true,
//   layout: {
//     padding: {
//       top: 30,
//       bottom: 30,
//     },
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: true,
//       text: 'Car Crashes by Month',
//       font: {
//         size: 24,
//         color: '#000',
//       },
//       padding: {
//         bottom: 30,
//       },
//     },
//   },
// };

// const labels = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const data = {
//   labels,
//   datasets: [
//     {
//       data: [
//         2709, 3069, 3461, 3162, 3206, 3003, 3011, 3140, 3100, 3273, 2962, 2878,
//       ],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)',
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//         'rgb(75, 192, 192)',
//         'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)',
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//         'rgb(75, 192, 192)',
//         'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function Month() {
//   return <Bar options={options} data={data} />;
// }

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  elements: {
    line: {
      borderWidth: 4,
      borderColor: '#000000',
    },
  },
  responsive: true,
  layout: {
    padding: {
      top: 30,
      bottom: 30,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Car Crashes by Month',
      font: {
        size: 24,
        color: '#000',
      },
      padding: {
        bottom: 30,
      },
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Fatal',
      data: [40, 69, 53, 57, 61, 56, 54, 49, 54, 51, 37, 40],
      backgroundColor: ['rgb(255, 99, 132, 0.5)'],
      borderColor: ['rgb(255, 99, 132)'],
      borderWidth: 1,
      fill: true,
    },
    {
      label: 'Severe Crash',
      data: [278, 264, 314, 308, 274, 292, 286, 247, 292, 339, 270, 257],
      backgroundColor: ['rgba(255, 159, 64, 0.7)'],
      borderColor: ['rgb(255, 159, 64)'],
      borderWidth: 1,
      fill: true,
    },
  ],
};

export default function Month() {
  return <Line options={options} data={data} />;
}
