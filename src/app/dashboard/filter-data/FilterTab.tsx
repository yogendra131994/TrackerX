'use client';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import expeseCategories from '../../assets/data/expenseOptions';
import paymentModes from '../../assets/data/paymentModes';
import AutocompleteComponent from '../components/AutocompleteComponent';
export default function FilterTab() {
  const [category, setCategory] = useState<string | null>(null);
  const [paymentMode, setPaymentMode] = useState<string | null>(null);
  console.log('rendered');

  return (
    <div className="flex h-full w-full gap-4 flex-wrap">
      <div className="h-[36px]">
        <DateRangeComponent />
      </div>

      <div className="w-[150px] ">
        <AutocompleteComponent
          options={expeseCategories}
          value={category}
          setValue={setCategory}
          placeholder="Category"
        />
      </div>
      <div className="w-[150px] ">
        <AutocompleteComponent
          options={paymentModes}
          value={paymentMode}
          setValue={setPaymentMode}
          placeholder="Payment mode"
        />
      </div>
      <div className="px-4 flex flex-col gap-4">
        <div className="w-full">
          <Button
            size="small"
            variant="contained"
            style={{
              backgroundColor: '#55acee',
              textTransform: 'none',
              width: '100%',
              fontSize: 14,
            }}
          >
            Filter
          </Button>
        </div>
        {/* <div className="w-full ">
          <Button
            size="small"
            variant="outlined"
            style={{
              textTransform: 'none',
              width: '100%',
              fontSize: 14,
            }}
          >
            Reset
          </Button>
        </div> */}
      </div>
    </div>
  );
}

function DateRangeComponent() {
  return (
    <div className="flex gap-4 h-full">
      <div className="h-full">
        <input
          className="border bg-white rounded-[4px] focus:outline-none border-lightgray h-full text-12 px-2"
          type="date"
          id="start"
          name="trip-start"
          placeholder="from"
          value={dayjs().format('YYYY-MM-DD')}
        />
      </div>
      <div className="h-full">
        <input
          className="border bg-white  rounded-[4px] focus:outline-none border-lightgray h-full text-12 px-2"
          type="date"
          id="start"
          name="trip-start"
          value={dayjs().format('YYYY-MM-DD')}
        />
      </div>
    </div>
  );
}
