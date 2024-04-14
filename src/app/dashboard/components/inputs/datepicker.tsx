interface Props {
  dateValue: Date | null;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Datepicker({ dateValue, handleDateChange }: Props) {
  return (
    <input
      className={`w-[120px] focus-within:border-blue border bg-white rounded-r-[4px] focus:outline-none  h-full text-12 px-2 ${dateValue === null ? 'text-lightgray border-lightgray' : 'text-black border-[#55acee]'}`}
      type="date"
      id="start"
      onChange={handleDateChange}
      name="trip-start"
      value={dateValue !== null ? dateValue : ''}
    />
  );
}
