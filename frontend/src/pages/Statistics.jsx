import Severity from '../components/charts/pieSeverity';
import DayOfWeek from '../components/charts/hbarDayOfWeek';
import TimeOfDay from '../components/charts/barTimeOfDay';
import Month from '../components/charts/barMonth';

const Statistics = () => {
  return (
    <main className="bg-orange-200 py-6">
      <div className="h-[600px] border-b border-dashed border-orange-500 mb-9">
        <Severity />
      </div>
      <div className="h-[600px] border-b border-dashed border-orange-500 mb-9 lg:p-8">
        <DayOfWeek />
      </div>
      <div className="h-[600px] border-b border-dashed border-orange-500 mb-9 lg:p-8">
        <TimeOfDay />
      </div>
      <div className="h-[600px] mb-9 lg:p-8">
        <Month />
      </div>
    </main>
  );
};

export default Statistics;
