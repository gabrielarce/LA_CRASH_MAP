import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  defaults,
  plugins,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

ChartJS.register(ArcElement, Tooltip, Legend, plugins);

export default function Severity() {
  return (
    <>
      <Pie
        data={{
          labels: [
            'Fatal',
            'Suspected serious injury or severe injury',
            'Suspected minor injury or visible injury',
            'Possible injury or complaint of pain',
          ],
          datasets: [
            {
              label: 'Crashes ',
              data: [655, 3421, 12482, 20416],
              backgroundColor: ['#E9190F', '#FE4E00', '#E67F0D', '#FFAE03'],
              borderRadius: 3,
              hoverOffset: 4,
              borderColor: '#F0F0F0',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          layout: {
            padding: 30,
          },
          plugins: {
            title: {
              display: true,
              text: 'Total Car Crashes - LA County 2022',
              font: {
                size: 24,
                color: '#000',
              },
            },
            subtitle: {
              display: true,
              text: 'There were a total of 36,974 reported car crashes in LA County.',
            },
          },
        }}
      />
    </>
  );
}
