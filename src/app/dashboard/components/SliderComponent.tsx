'use client';
import { Slider } from '@mui/material';
import React from 'react';

export default function SliderComponent() {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="flex w-full gap-4 items-center">
      <div className="w-[70%]">
        <Slider
          min={0}
          max={10000}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          size="small"
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
      <div className="flex text-14 font-semibold w-[30%]">
        <div className="flex">
          <div>₹</div>
          <div className="flex-1">{value[0]}</div>
        </div>
        {' - '}
        <div className="flex">
          <div>₹</div>
          <div className="flex-1">{value[1]}</div>
        </div>
      </div>
    </div>
  );
}
