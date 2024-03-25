import Image from 'next/image';
import Link from 'next/link';
import icons from '../../assets/icons/icons';

export default function BottomNav() {
  return (
    <div className="w-full bg-blue">
      <div className="flex px-8 py-2 md:visible md:flex-col items-center gap-12 flex-grow">
        <Link href="/home">
          <div className="flex px-2">
            <Image width={90} src={icons.logo_x_letter_white} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
