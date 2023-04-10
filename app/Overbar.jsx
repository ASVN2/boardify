import Link from 'next/link';
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Overbar = () => {
  return (
    <div className="flex justify-between place-items-center my-4">
      <div className="flex place-items-center gap-2">
        <HiOutlineLocationMarker /> Morocco
        <p className="text-gray-400">+212 693 485 629</p>
      </div>
      <div className="link flex gap-5">
        <Link href="/" className="active text-green-500 font-bold">
          Promotions
        </Link>
        <Link href="/">Brands</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Delivery</Link>
        <Link href="/">Stores</Link>
        <Link href="/">Contacts</Link>
      </div>
    </div>
  );
};

export default Overbar;
