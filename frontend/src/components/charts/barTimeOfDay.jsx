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
  elements: {
    bar: {
      borderWidth: 1,
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
      text: 'Car Crashes by Time of Day',
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
  '12:00 AM - 02:59 AM',
  '3:00 AM - 05:59 AM',
  '6:00 AM - 08:59 AM',
  '9:00 AM - 11:59 AM',
  '12:00 PM - 02:59 AM',
  '3:00 PM - 05:59 PM',
  '6:00 PM - 08:59 PM',
  '9:00 PM - 11:59 PM',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Fatal Crash',
      data: [132, 68, 57, 41, 51, 56, 112, 132],
      backgroundColor: ['rgba(255, 99, 132, 0.5)'],
      borderColor: ['rgb(255, 99, 132)'],
      borderWidth: 1,
    },
    {
      label: 'Severe Crash',
      data: [405, 214, 325, 320, 430, 576, 613, 524],
      backgroundColor: ['rgba(255, 159, 64, 0.5)'],
      borderColor: ['rgb(255, 159, 64)'],
      borderWidth: 1,
    },
  ],
};

export default function TimeOfDay() {
  return <Bar options={options} data={data} />;
}
