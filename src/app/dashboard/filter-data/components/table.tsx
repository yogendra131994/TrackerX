'use client';
import useWindowDimensions from '@/app/hooks/windowdimension';
import { transactionsData } from '@/app/recoilState/atom';
import dayjs from 'dayjs';
import { Suspense, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { FilterTab } from './filtertab';
import SearchBar from './searchbar';

export default function Table() {
  const data: any = useRecoilValue<any>(transactionsData);
  console.log('from table', data);
  const { width, height } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  return (
    <>
      {/* Desktop/Tablet View */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-2 my-2 lg:hidden">
          <SearchBar
            filterState={searchQuery}
            setFilterState={setSearchQuery}
          />
        </div>
        <div className="hidden lg:block">
          <table className="w-full bg-blue text-white">
            <thead>
              <tr className="text-14 text-left">
                <th className="w-[5%] px-4 py-1 whitespace-nowrap text-ellipsis">
                  No
                </th>
                <th className="w-[15%] px-4 py-1 whitespace-nowrap">Date</th>
                <th className="w-[30%] px-4 py-1 whitespace-nowrap">
                  Description
                </th>
                <th className="w-[20%] px-4 py-1 whitespace-nowrap">
                  Category
                </th>
                <th className="w-[15%] px-4 py-1 whitespace-nowrap">Mode</th>
                <th className="w-[15%] px-4 py-1 whitespace-nowrap">Amount</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<p>Loading...</p>}>
            <table className="w-full">
              <tbody className="divide-y divide-gray">
                {data?.records?.map((item: any, idx: number) => (
                  <TableRow data={item} key={idx} serialNumber={idx + 1} />
                ))}
              </tbody>
            </table>
          </Suspense>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col md:flex-row gap-4 w-full lg:hidden ">
        <div className="w-full h-full overflow-auto">
          {data?.records?.map((item: any, idx: number) => (
            <TableItem data={item} key={idx} serialNumber={idx + 1} />
          ))}
        </div>
        {width && width >= 768 && width < 1024 && (
          <div className="hidden md:block">
            <FilterTab />
          </div>
        )}
      </div>
    </>
  );
}

// @ts-ignore

function TableRow({ data, serialNumber }) {
  return (
    <tr className="text-12">
      <td className="w-[5%] px-4 py-1 whitespace-nowrap">{serialNumber}</td>
      <td className="w-[15%] px-4 py-1 whitespace-nowrap">
        {dayjs(data?.date).format('DD-MM-YYYY')}
      </td>
      <td className="w-[30%] px-4 py-1 whitespace-nowrap">
        {data?.description}
      </td>
      <td className="w-[20%] px-4 py-1 whitespace-nowrap">{data?.category}</td>
      <td className="w-[15%] px-4 py-1 whitespace-nowrap">
        {data?.modeofpayment}
      </td>
      <td className="w-[15%] px-4 py-1 whitespace-nowrap font-bold">
        {data?.amount?.toLocaleString('en-IN', {
          maximumFractionDigits: 2,
          style: 'currency',
          currency: 'INR',
        })}
      </td>
    </tr>
  );
}
// @ts-ignore

function TableItem({ data, serialNumber }) {
  return (
    <div className="flex flex-row gap-4 px-4">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-[50px] bg-blue"></div>
      </div>
      <div className="flex flex-col gap-[2px] w-full">
        <div className="flex items-center max-w-screen">
          <div className="flex-1 break-all text-16 font-semibold">
            {data?.category}
          </div>
          <div className="w-fit px-2 text-18 font-bold">
            {data?.amount?.toLocaleString('en-IN', {
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'INR',
            })}
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="flex-1 break-words break-all text-mediumgray text-14">
            {data?.description}
          </div>
          <div className="flex flex-col items-start h-full justify-start w-fit px-2 text-12">
            {dayjs(data?.date).format('DD-MMM-YYYY')}
          </div>
        </div>
      </div>
    </div>
  );
}
