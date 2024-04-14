'use client';
import { Modal } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import icons from '../../assets/icons/icons';
import AddExpense from './forms/expenseform';
export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="flex gap-8 py-[12px] md:py-3 md:h-screen lg:w-[200px] md:flex-col bg-blue items-center">
      {/* logo */}
      <Link href="/dashboard/home">
        <div className="flex w-full px-2">
          <Image height={50} src={icons.logo_white} alt="" />
        </div>
      </Link>
      {/* menu options */}
      <div className="flex w-full md:flex-col items-start gap-2 flex-grow px-5">
        <Link href="/dashboard/home">
          <div className="flex gap-4 items-center shrink-0 cursor-pointer">
            <Image height={25} width={25} src={icons.home_icon} alt="" />
            <div className="text-18 font-normal text-white">Home</div>
          </div>
        </Link>
        <Link href="/dashboard/filter-data">
          <div className="flex gap-4 items-center shrink-0 cursor-pointer">
            <Image height={25} width={25} src={icons.filter} alt="" />
            <div className="text-18 font-normal text-white">Filter</div>
          </div>
        </Link>
      </div>
      <div className="flex w-full md:flex-col items-start gap-2 px-5">
        <div
          className="flex gap-4 items-center shrink-0 cursor-pointer"
          onClick={openModal}
        >
          <Image height={25} width={25} src={icons.money_spend} alt="" />
          <div className="text-18 font-normal text-white">Outgoing</div>
        </div>

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

      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={false} // Pass the state to control the modal open/close
        onClose={() => setIsModalOpen(false)} // Close modal when clicking outside or pressing ESC key
      >
        <div className="flex h-full w-full items-center justify-center">
          <AddExpense />
        </div>
      </Modal>
    </div>
  );
}
