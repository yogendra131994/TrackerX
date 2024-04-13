'use client';
import { transactionsData as transactionsDataAtom } from '@/app/recoilState/atom';
import { Button } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import expeseCategories from '../../../assets/data/expenseOptions';
import paymentModes from '../../../assets/data/paymentModes';
import AutocompleteComponent from '../../components/AutocompleteComponent';
import SliderComponent from '../../components/amountrange';
import SearchBar from './searchbar';

export function FilterTab() {
  const [page, setPage] = useState<string | null>(null);

  // interface FilterState {
  //   category: string | null;
  //   paymentMode: string | null;
  //   fromAmount: number | null;
  //   toAmount: number | null;
  //   fromDate: Date | null;
  //   toDate: Date | null;
  //   reqUrl: string | null;
  //   page: string | null;
  //   cursor: string | null;
  //   searchQuery: string | null;
  // }

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

  const [transactionsData, setTransactionsData] =
    useRecoilState<Array<Object>>(transactionsDataAtom);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [disableNextButton, setDisableNextButton] = useState<boolean>(false);
  const [disablePreviousButton, setDisablePreviousButton] =
    useState<boolean>(true);

  const createQueryString = (name: string, value: string) => {
    return name + '=' + value;
  };

  async function handleFilter() {
    setRefresh(!refresh);
  }
  function handleNext() {
    setPage('n');
    setFilterState((prevState: any) => ({
      ...prevState,
      page: 'n',
    }));
    setRefresh(!refresh);
  }

  function handlePrevious() {
    setPage('p');
    setFilterState((prevState: any) => ({
      ...prevState,
      page: 'p',
    }));
    setRefresh(!refresh);
  }

  useEffect(() => {
    buildQueryString();
  }, [refresh]);

  function buildQueryString() {
    let queryString = '';

    // Construct the query string based on current state values
    // if (category !== null) {
    //   queryString += '&' + createQueryString('category', category);
    // }

    // if (paymentMode !== null) {
    //   queryString += '&' + createQueryString('paymentMode', paymentMode);
    // }

    // if (amountRange !== null && amountRange.length === 2) {
    //   queryString +=
    //     '&' + createQueryString('fromAmount', amountRange[0].toString());
    //   queryString +=
    //     '&' + createQueryString('toAmount', amountRange[1].toString());
    // }

    // if (fromDate !== null) {
    //   queryString +=
    //     '&' + createQueryString('fromDate', dayjs(fromDate).toISOString());
    // }

    // if (toDate !== null) {
    //   queryString +=
    //     '&' + createQueryString('toDate', dayjs(toDate).toISOString());
    // }

    // if (searchQuery && searchQuery.length > 0) {
    //   queryString += '&' + createQueryString('searchQuery', searchQuery);
    // }
    // if (page && page.length > 0) {
    //   queryString += '&' + createQueryString('page', page);
    // }
    // if (cursor) {
    //   queryString += '&' + createQueryString('cursor', cursor);
    // }

    // if (queryString.length > 0) {
    //   queryString = '?' + queryString.substring(1);
    // }

    const keys = Object.keys(filterState);
    keys.forEach((key) => {
      const value = filterState[key];
      if (value != null && value !== '') {
        if (key === 'fromDate' || key === 'toDate') {
          queryString +=
            '&' + createQueryString(key, dayjs(value).toISOString());
        } else {
          queryString += '&' + createQueryString(key, value.toString());
        }
      }
    });

    if (queryString.length > 0) {
      queryString = '?' + queryString.substring(1);
    }

    fetchData(queryString);
  }

  async function fetchData(queryString: string) {
    console.log('from get expense');
    if (transactionsData != null) {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/getExpense' + queryString,
        );
        // console.log('has next', response.data.hasNext());

        console.log(response);
        setTransactionsData(response.data);
        console.log('cursor', response.data.meta.page.cursor);
        setFilterState((prevState: any) => ({
          ...prevState,
          'cursor': response.data.meta.page.cursor,
        }));
        if (response.data.meta.page.more) {
          if (page === 'n') {
            setDisableNextButton(false);
            setDisablePreviousButton(false);
          } else if (page === 'p') {
            setDisablePreviousButton(false);
            setDisableNextButton(false);
          } else {
            setDisablePreviousButton(true);
            setDisableNextButton(false);
          }
        } else {
          if (page === 'n') {
            setDisableNextButton(true);
          } else if (page === 'p') {
            setDisablePreviousButton(true);
            setDisableNextButton(false);
          } else {
            setDisablePreviousButton(true);
            setDisableNextButton(true);
          }
          setPage(null);
          setFilterState((prevState: any) => ({
            ...prevState,
            page: null,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  function handleReset() {
    setFilterState(initialFilterState);
    setRefresh(!refresh);
  }

  useEffect(() => {
    if (transactionsData.length === 0) {
      fetchData('');
    }
  }, []);

  console.log('rerendered');
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
          onClick={handleFilter}
        >
          Filter{' '}
        </Button>
        <Button
          size="medium"
          variant="outlined"
          style={{ textTransform: 'none', color: '#55acee', fontSize: '12px' }}
          onClick={handleReset}
        >
          Reset{' '}
        </Button>
        <div
          onClick={disableNextButton ? () => {} : handleNext}
          className={`text-blue text-12 ${disableNextButton ? ' text-mediumgray' : 'text-blue'}`}
        >
          Next
        </div>
        <div
          onClick={disablePreviousButton ? () => {} : handlePrevious}
          className={`text-blue text-12 ${disablePreviousButton ? ' text-mediumgray' : 'text-blue'}`}
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
        <input
          className={`w-[120px] focus-within:border-blue border bg-white rounded-l-[4px] focus:outline-none  h-full text-12 px-2 ${date1 === null ? 'text-lightgray border-lightgray' : 'text-black border-[#55acee]'}`}
          type="date"
          id="start"
          name="trip-start"
          onChange={handleFromDateChange}
          value={filterState.fromDate !== null ? filterState.fromDate : ''}
        />
      </div>
      <div className="h-full w-full flex items-center">
        <input
          className={`w-[120px] focus-within:border-blue border bg-white rounded-r-[4px] focus:outline-none  h-full text-12 px-2 ${date2 === null ? 'text-lightgray border-lightgray' : 'text-black border-[#55acee]'}`}
          type="date"
          id="start"
          onChange={handleToDateChange}
          name="trip-start"
          value={filterState.toDate !== null ? filterState.toDate : ''}
        />
      </div>
    </div>
  );
}
