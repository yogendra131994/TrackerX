'use client';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
interface SearchBarProps {
  setFilterState: Dispatch<SetStateAction<any>>;
  filterState: FilterState | string | null;
}
export default function SearchBar({ setFilterState }: SearchBarProps) {
  function handleSearchQuery(event: ChangeEvent<HTMLInputElement>): void {
    setFilterState((prevState: any) => ({
      ...prevState,
      searchQuery: event.target.value,
    }));
  }

  return (
    <div className=" flex w-full h-full">
      <div className="text-12 h-[29px] w-full">
        <input
          className="focus-within:border-blue border h-full w-full bg-white rounded-l-[4px] focus:outline-none border-lightgray text-12 px-2"
          placeholder="Search here... "
          onChange={handleSearchQuery}
        />
      </div>
      <div className=" flex items-center justify-center bg-blue px-1 rounded-r-[4px] h-[29px]">
        <SearchRoundedIcon sx={{ color: 'white', fontSize: '20px' }} />{' '}
      </div>
    </div>
  );
}
