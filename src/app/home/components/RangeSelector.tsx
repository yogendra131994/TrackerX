'use client';
import {
  donutChartSelectedRangeState,
  multibarSelectedRangeState,
} from '@/app/recoilState/atom';
import { useRecoilState } from 'recoil';

export default function RangeSelector({ atom }: { atom: string }) {
  const ranges = ['1w', '1m', '3m', '5m', '1y'];
  const [selectedRange, setSelectedRange] = useRecoilState<string>(
    atom === 'MultibarChart'
      ? multibarSelectedRangeState
      : donutChartSelectedRangeState,
  );

  return (
    <div className="flex  justify-center gap-1 items-center text-12 text-blue">
      {ranges.map((range, index) => (
        <div
          key={index}
          className={`flex shrink-0 justify-center items-center w-7 h-5 text-center rounded-md ${selectedRange === ranges[index] ? 'bg-blue text-white' : ''} cursor-pointer`}
          onClick={() => {
            setSelectedRange(ranges[index]);
          }}
        >
          {range}
        </div>
      ))}
    </div>
  );
}
