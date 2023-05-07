'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../public/boardlogo.png';
import { BsSearch, BsTruck } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';
import { FiHome, FiUser } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiRightArrow } from 'react-icons/bi';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div className="navbar flex mt-10 gap-10">
      <div className="left flex place-items-center gap-6 flex-1">
        <Image src={logo} width="200" />
        <div className="bg-gray-200 p-2 hidden md:flex lg:flex xl:flex rounded-md  flex-1 pr-4">
          <input type="text" placeholder="Search" className="text-gray-900 outline-none flex-1 bg-transparent" />
          <button>
            <BsSearch className="text-2xl" />
          </button>
        </div>
      </div>
      <div onClick={() => toggleMenu()} className={`flex md:hidden cursor-pointer z-50 xl:hidden lg:hidden `}>
        <TbMenu2 className="text-3xl" />
      </div>

      <div onClick={() => toggleMenu()} className={`overlay ${showMenu && ' opacity-0 hidden'} absolute w-full h-full bg-[#00000094] left-0 top-0 z-40 `}></div>
      <div
        className={`link ${
          showMenu ? '-left-[100%]' : 'left-0'
        } duration-300 md:hidden xl:hidden lg:hidden left flex gap-5 bg-black text-white w-[90%] h-screen fixed left-0 top-0 z-50`}>
        <div className="holder p-4 flex flex-col gap-3 mt-10 ">
          <h1 className="text-4xl text-green-300 uppercase underline mb-4">Menu</h1>
          <Link href="/" className="text-3xl flex gap-2 place-items-center text-yellow-300 hover:ml-4 hover:text-white duration-300 w-fit uppercase">
            <BiRightArrow />
            Promotions
          </Link>
          <Link href="/" className="text-3xl flex gap-2 place-items-center text-purple-300 hover:ml-4 hover:text-white duration-300 w-fit uppercase">
            <BiRightArrow />
            Brands
          </Link>
          <Link href="/" className="text-3xl flex gap-2 place-items-center text-green-300 hover:ml-4 hover:text-white duration-300 w-fit uppercase">
            <BiRightArrow />
            Blog
          </Link>
          <Link href="/" className="text-3xl flex gap-2 place-items-center text-blue-300 hover:ml-4 hover:text-white duration-300 w-fit uppercase">
            <BiRightArrow />
            Delivery
          </Link>
          <Link href="/" className="text-3xl flex gap-2 place-items-center text-yellow-400 hover:ml-4 hover:text-white duration-300 w-fit uppercase">
            <BiRightArrow />
            Stores
          </Link>
          <Link href="/" className="text-3xl flex gap-2 place-items-center text-pink-300 hover:ml-4 hover:text-white duration-300 w-fit uppercase">
            <BiRightArrow />
            Contacts
          </Link>
        </div>
      </div>

      <div className="right hidden md:flex lg:flex xl:flex  gap-4 ">
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

      <div className="flot-manu bg-black shadow-md md:hidden lg:hidden xl:hidden text-white flex fixed justify-evenly px-10 py-4 bottom-0 left-[50%] w-full mx-auto z-30 -translate-x-[50%]">
        <Link href="/" className="  flex justify-center place-items-center rounded-full">
          <BsTruck className="text-2xl font-normal" />
        </Link>
        <Link href="/" className=" flex justify-center place-items-center rounded-full ">
          <HiOutlineShoppingCart className="text-2xl font-normal" />
        </Link>
        <Link href="/" className=" flex justify-center place-items-center rounded-full ">
          <FiHome className="text-2xl font-normal" />
        </Link>
        <Link href="/" className=" flex justify-center place-items-center rounded-full ">
          <MdOutlineFavoriteBorder className="text-2xl font-normal" />
        </Link>
        <Link href="/" className=" flex justify-center place-items-center rounded-full">
          <FiUser className="text-2xl font-normal" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
