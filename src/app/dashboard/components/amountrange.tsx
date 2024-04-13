'use client';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

export default function SliderComponent({
  filterState,
  setFilterState,
}: {
  filterState: FilterState;
  setFilterState: Dispatch<SetStateAction<any>>;
}) {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  function handleFromAmount(event: ChangeEvent<HTMLInputElement>): void {
    const fromValue = event.target.valueAsNumber;
    setValue([fromValue, value[1]]);
    console.log('values', value[0]);
    setFilterState((prevState: any) => ({
      ...prevState,
      fromAmount: fromValue,
    }));
  }
  function handleToAmount(event: ChangeEvent<HTMLInputElement>): void {
    const toValue = event.target.valueAsNumber;
    setValue([value[0], toValue]);
    console.log('values', value[0]);
    setFilterState((prevState: any) => ({
      ...prevState,
      toAmount: toValue,
    }));
  }

  return (
    <div className="flex h-[29px] items-center">
      <div className="w-full h-full flex items-center">
        <input
          type="number"
          className={`w-[120px] h-full px-2 text-12 focus:outline-none border focus-within:border-blue rounded-r-[4px] border-lightgray ${value[0] ? 'border-[#55acee]' : 'border-[#ccd6dd]'}`}
          placeholder="from"
          onChange={handleFromAmount}
          value={filterState.fromAmount !== null ? filterState.fromAmount : ''}
        />
      </div>
      <div className="w-full h-full flex items-center">
        <input
          type="number"
          className={`w-[120px] h-full px-2 text-12 focus:outline-none border focus-within:border-blue rounded-r-[4px] border-lightgray ${value[1] ? 'border-[#55acee]' : 'border-[#ccd6dd]'}`}
          placeholder="to"
          onChange={handleToAmount}
          value={filterState.toAmount !== null ? filterState.toAmount : ''}
        />
      </div>
    </div>
  );
}
