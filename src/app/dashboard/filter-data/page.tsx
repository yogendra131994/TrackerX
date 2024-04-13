'use client';
// import FilterTab from './FilterTab';
import useWindowDimensions from '@/app/hooks/windowdimension';
import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { FilterTab } from './components/filtertab';
import Table from './components/table';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { width, height } = useWindowDimensions();

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setMenuOpen(!menuOpen);
    };
  return (
    <div className="flex flex-col h-full w-full overflow-x-hidden px-2 py-2 ">
      {/* for screen greater than tablets */}
      <div className="mb-4 hidden lg:block">
        {width && width >= 1024 && <FilterTab />}
      </div>

      <div className="flex-1 flex overflow-auto lg:overflow-hidden ">
        <Table />
      </div>
      <div>
        {(width && width <= 767) || !width ? ( // Check if width is less than or equal to 767, or if width is not yet available
          <SwipeableDrawer
            anchor="right"
            open={menuOpen}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
            className="lg:hidden"
            sx={{ padding: 20 }}
            disableBackdropTransition={true}
          >
            <div className="px-3 py-2 relative">
              <FilterTab />
            </div>
          </SwipeableDrawer>
        ) : null}
      </div>
    </div>
  );
}
