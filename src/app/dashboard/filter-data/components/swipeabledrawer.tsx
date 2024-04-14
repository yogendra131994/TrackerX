import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { FilterTab } from '../components/filtertab';

export default function SwipeableFilterDrawer() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
  );
}
