import Image from 'next/image';
import React from 'react';
import logo from '../public/boardlogo.png';
import { BsSearch } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar flex mt-10 gap-10">
      <div className="left flex place-items-center gap-6 flex-1">
        <Image src={logo} width="200" />
        <div className="bg-gray-200 p-2 rounded-md flex flex-1 pr-4">
          <input type="text" placeholder="Search" className="text-gray-900 outline-none flex-1 bg-transparent" />
          <button>
            <BsSearch />
          </button>
        </div>
      </div>

      <div className="right flex gap-4 ">
        <button className="user flex flex-col duration-200 hover:bg-green-300 justify-center place-items-center gap-1 border-2 border-black w-10 h-10 rounded-full">
          <FaRegUser className="text-xl" />
        </button>
        <button className="fav flex flex-col duration-200 hover:bg-red-300  justify-center place-items-center gap-1 border-2 border-black w-10 h-10 rounded-full">
          <MdOutlineFavoriteBorder className="text-xl" />
        </button>
        <button className="shop flex flex-col duration-200 hover:bg-blue-300 justify-center place-items-center gap-1 border-2 border-black w-10 h-10 rounded-full">
          <AiOutlineShopping className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
