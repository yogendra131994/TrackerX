'use client';
import { Button } from '@mui/material';
import { Dispatch, SetStateAction, Suspense, useState } from 'react';
import expeseCategories from '../../../assets/data/expenseOptions';
import paymentModes from '../../../assets/data/paymentModes';
import AutocompleteComponent from '../../components/AutocompleteComponent';
import SliderComponent from '../../components/amountrange';
import DatePicker from '../../components/inputs/datepicker';
import SearchBar from './searchbar';

export function FilterTab() {
  const initialFilterState = {
    category: null,
    paymentMode: null,
    fromAmount: null,
    toAmount: null,
    fromDate: null,
    toDate: null,
    reqUrl: null,
    page: null,
    cursor: null,
    searchQuery: null,
  };
  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterState);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <div className="flex flex-row justify-end gap-2 px-2 mb-2">
        <div className="w-full hidden lg:block">
          <SearchBar
            filterState={filterState}
            setFilterState={setFilterState}
          />
        </div>
      </div>
      <div className=" rounded-sm block md:block lg:block">
        <div className="flex flex-col lg:flex-row mb-2">
          <div className=" px-2 mb-4 lg:mb-0">
            <div className="text-12 font-medium mb-1">Amount</div>
            <div className="w-full h-[29px]">
              <SliderComponent
                filterState={filterState}
                setFilterState={setFilterState}
              />
            </div>
          </div>

          <div className=" px-2 mb-4 lg:mb-0">
            <div className="text-12 font-medium mb-1">Date </div>
            <div className="w-full h-[29px]">
              <DateRangeComponent
                filterState={filterState}
                setFilterState={setFilterState}
              />
            </div>
          </div>

          <div className=" px-2 mb-4 lg:mb-0">
            <div className="text-12 font-medium mb-1">Category </div>
            <div>
              <AutocompleteComponent
                options={expeseCategories}
                placeholder="Category"
                filterState={filterState}
                setFilterState={setFilterState}
              />
            </div>
          </div>
          <div className="mb-4 lg:mb-0 px-2">
            <div className="text-12 font-medium mb-1">Payment mode </div>
            <div>
              <AutocompleteComponent
                options={paymentModes}
                placeholder="Payment mode"
                filterState={filterState}
                setFilterState={setFilterState}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-2 items-center">
        <Button
          size="medium"
          variant="outlined"
          style={{ textTransform: 'none', color: '#55acee', fontSize: '12px' }}
        >
          Filter{' '}
        </Button>
        <Button
          size="medium"
          variant="outlined"
          style={{ textTransform: 'none', color: '#55acee', fontSize: '12px' }}
        >
          Reset{' '}
        </Button>
        <div
          className={`text-blue text-12 cursor-pointer`}
        >
          Next
        </div>
        <div
          className={`text-blue text-12 cursor-pointer`}
        >
          Previous
        </div>
      </div>
    </Suspense>
  );
}

function DateRangeComponent({
  filterState,
  setFilterState,
}: {
  filterState: FilterState;
  setFilterState: Dispatch<SetStateAction<any>>;
}) {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setDate1(dateValue ? new Date(dateValue) : null);
    setFilterState((prevState: any) => ({
      ...prevState,
      fromDate: dateValue,
    }));
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setDate2(dateValue ? new Date(dateValue) : null);
    setFilterState((prevState: any) => ({
      ...prevState,
      toDate: dateValue,
    }));
  };

  return (
    <div className="flex h-full">
      <div className="h-full w-full flex items-center">
        {/* <input
          className={`w-[120px] focus-within:border-blue border bg-white rounded-l-[4px] focus:outline-none  h-full text-12 px-2 ${date1 === null ? 'text-lightgray border-lightgray' : 'text-black border-[#55acee]'}`}
          type="date"
          id="start"
          name="trip-start"
          onChange={handleFromDateChange}
          value={filterState.fromDate !== null ? filterState.fromDate : ''}
        /> */}
        <DatePicker
          dateValue={filterState?.fromDate}
          handleDateChange={handleFromDateChange}
        />
      </div>
      <div className="h-full w-full flex items-center">
        <DatePicker
          dateValue={filterState?.toDate}
          handleDateChange={handleToDateChange}
        />
      </div>
    </div>
  );
}
