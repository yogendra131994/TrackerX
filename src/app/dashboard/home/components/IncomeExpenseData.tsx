import Image from 'next/image';
import icons from '../../../assets/icons/icons';
export default function IncomeExpenseData() {
  return (
    <div className="flex w-full justify-between gap-4  md:justify-start md:w-auto md:gap-8">
      {/* income card */}
      <div className="flex flex-col px-4 py-4 rounded-md shadow-md w-full md:w-fit md:gap-3 bg-white">
        <div className="flex w-full items-center gap-8">
          <div className="flex flex-col">
            <div className="font-medium text-16 text-mediumgray">Income</div>
            <div className="text-20 font-semibold text-black">₹3,000</div>
          </div>
          <div className="w-[40px]">
            <Image src={icons.homeIcons.downArrow} alt="" />
          </div>
        </div>
        <div className="text-12 text-mediumgray">This month</div>
      </div>
      {/* expense card */}
      <div className="flex flex-col px-4 py-4 rounded-md shadow-md w-full md:w-fit md:gap-3 bg-white">
        <div className="flex w-full items-center gap-8">
          <div className="flex flex-col">
            <div className="font-medium text-16 text-mediumgray">Expense</div>
            <div className="text-20 font-semibold">₹3,000</div>
          </div>
          <div className="w-[40px]">
            <Image src={icons.homeIcons.upArrow} alt="" />
          </div>
        </div>
        <div className="text-12 text-mediumgray">This month</div>
      </div>
    </div>
  );
}
