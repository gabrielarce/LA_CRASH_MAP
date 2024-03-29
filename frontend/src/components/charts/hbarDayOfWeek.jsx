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

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
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
      text: 'Car Crashes by Day of the Week',
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
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const data = {
  labels,
  datasets: [
    {
      // data: [4996, 5203, 5224, 5264, 5731, 5632, 4924],
      label: 'Fatal Crash',
      data: [80, 94, 64, 82, 96, 118, 121],
      backgroundColor: ['rgba(255, 99, 132, 0.5)'],
      borderColor: ['rgb(255, 99, 132)'],
      borderWidth: 1,
    },
    {
      label: 'Severe Crash',
      data: [398, 407, 482, 486, 527, 553, 568],
      backgroundColor: ['rgba(255, 159, 64, 0.5)'],
      borderColor: ['rgb(255, 159, 64)'],
      borderWidth: 1,
    },
  ],
};

export default function DayOfWeek() {
  return <Bar options={options} data={data} />;
}
