import Severity from '../components/charts/pieSeverity';
import DayOfWeek from '../components/charts/hbarDayOfWeek';

const Statistics = () => {
  return (
    <main className="bg-orange-200 py-6">
      <div className="h-[600px]">
        <Severity />
      </div>
      <div className="h-[600px]">
        <DayOfWeek />
      </div>
    </main>
  );
};

export default Statistics;
