// import FilterTab from './FilterTab';
import FilterTab from './FilterTab';
import Table from './Table';

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden p-4">
      {/* for screen greater than tablets */}
      <div className="mb-4">
        <FilterTab />
      </div>

      <Table />
      {/* for mobile screens */}
      <div></div>
    </div>
  );
}
