import Image from 'next/image';
import Link from 'next/link';
import icons from '../../assets/icons/icons';

export default function BottomNav() {
  return (
    <div className="w-full bg-blue relative">
      <div className="flex px-8 py-2 md:visible md:flex-col items-center gap-12 flex-grow">
        <Link href="/home">
          <div className="flex flex-col items-center shrink-0 cursor-pointer">
            <Image height={30} width={30} src={icons.home_icon} alt="" />
            <div className="text-12 font-medium text-white">Home</div>
          </div>
        </Link>
        <Link href="/filter-data">
          <div className="flex flex-col items-center shrink-0 cursor-pointer">
            <Image height={30} width={30} src={icons.filter} alt="" />
            <div className="text-12 font-medium text-white">Filter</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
