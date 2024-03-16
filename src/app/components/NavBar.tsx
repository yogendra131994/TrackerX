import Image from 'next/image';
import Link from 'next/link';
import icons from '../assets/icons/icons';
export default function NavBar() {
  return (
    <div className="flex gap-8 py-[12px] md:py-3 md:h-screen md:w-[200px] md:flex-col bg-blue items-center">
      {/* logo */}
      <Link href="/home">
        <div className="flex w-full px-2">
          <Image height={50} src={icons.logo_white} alt="" />
        </div>
      </Link>
      {/* menu options */}
      <div className="flex w-full md:flex-col items-start gap-2 flex-grow px-5">
        <Link href="/home">
          <div className="flex gap-4 items-center shrink-0 cursor-pointer">
            <Image height={25} width={25} src={icons.home_icon} alt="" />
            <div className="text-18 font-normal text-white">Home</div>
          </div>
        </Link>
        <Link href="/filter-data">
          <div className="flex gap-4 items-center shrink-0 cursor-pointer">
            <Image height={25} width={25} src={icons.filter} alt="" />
            <div className="text-18 font-normal text-white">Filter</div>
          </div>
        </Link>
      </div>
      <div className="flex w-full md:flex-col items-start gap-2 px-5">
        <Link href="/add-expense">
          <div className="flex gap-4 items-center shrink-0 cursor-pointer">
            <Image height={25} width={25} src={icons.money_spend} alt="" />
            <div className="text-18 font-normal text-white">Outgoing</div>
          </div>
        </Link>
        <Link href="/add-expense">
          <div className="flex gap-4 items-center shrink-0 cursor-pointer">
            <Image height={25} width={25} src={icons.money_receive} alt="" />
            <div className="text-18 font-normal text-white">Incoming</div>
          </div>
        </Link>
      </div>

      <div className="flex w-full gap-4 items-center shrink-0 cursor-pointer px-5">
        <Image height={25} width={25} src={icons.logout} alt="" />
        <div className="text-18 font-normal text-white">Sign out</div>
      </div>
    </div>
  );
}
