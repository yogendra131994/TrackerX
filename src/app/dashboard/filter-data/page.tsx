'use client';
// import FilterTab from './FilterTab';
import useWindowDimensions from '@/app/hooks/windowdimension';
import { FilterTab } from './components/filtertab';
import SwipeableFilterDrawer from './components/swipeabledrawer';
import Table from './components/table';

export default function Page() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden px-2 py-2 ">
      {/* for screen greater than tablets */}
      <div className="mb-4 hidden lg:block">
        {width && width >= 1024 && <FilterTab />}
      </div>

      <div className="flex-1 flex overflow-auto lg:overflow-x-auto ">
        <Table />
      </div>
      <div>
        {(width && width <= 767) || !width ? <SwipeableFilterDrawer /> : null}
      </div>
    </div>
  );
}
