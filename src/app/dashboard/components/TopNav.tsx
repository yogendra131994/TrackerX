import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import icons from '../../assets/icons/icons';

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState<boolean>();
  return (
    <div className="w-full bg-blue">
      <div className="flex px-8 py-2  lg:flex-col items-center gap-12 flex-grow justify-between">
        <Link href="/home">
          <div className="flex px-2">
            <Image width={90} src={icons.logo_x_letter_white} alt="" />
          </div>
        </Link>
        <div
          className=" block md:hidden "
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuRoundedIcon fontSize="large" style={{ color: 'white' }} />
        </div>
      </div>
    </div>
  );
}
