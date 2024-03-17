import { DonutChart } from '../components/charts/DonutChart';
import MultiBarChart from '../components/charts/MultibarChart';
import IncomeExpenseData from './components/IncomeExpenseData';
import RangeSelector from './components/RangeSelector';

export default function page() {
  return (
    <div className="flex flex-col px-4 h-full gap-4">
      <IncomeExpenseData />
      {/* charts */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full md:w-[50%] md:h-[300px] px-6 py-4 rounded-md shadow-md bg-white">
          <div className="flex justify-between items-center">
            <div className="font-medium text-16 text-mediumgray">
              Income and Expense
            </div>
            <RangeSelector atom="MultibarChart" />
          </div>

          <MultiBarChart />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[50%] md:h-[300px] px-6 py-4 rounded-md shadow-md bg-white">
          <div className="flex justify-between items-center">
            <div className="font-medium text-16 text-mediumgray">
              Expense Breakdown
            </div>
            <RangeSelector atom="DonutChart" />
          </div>
          <div className="flex flex-col h-full justify-center gap-4 md:gap-0 md:flex-row">
            <div className="md:flex-1">
              <DonutChart />
            </div>
            <div className="flex-1 flex justify-center">
              <DonutChartLegend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonutChartLegend() {
  const backgroundColor = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
  ];
  return (
    <div className="flex flex-wrap gap-4 justify-center md:grid md:grid-cols-1 md:gap-y-2 md:h-full md:items-center w-full md:justify-center ">
      {backgroundColor.map((color: string, idx: number) => {
        return (
          <div className="flex items-center gap-4" key={idx}>
            <div
              className={`flex shrink-0 w-2 h-2 rounded-[20px]`}
              style={{ backgroundColor: color }}
            ></div>
            <div className="text-12">Category {idx}</div>
          </div>
        );
      })}
    </div>
  );
}
