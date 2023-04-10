import Link from 'next/link';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer bg-black pt-10 pb-4">
      <div className="flex max-w-[1200px] mb-6 mx-auto gap-8  text-white justify-between">
        <div className="col">
          <Link className="block font-bold mb-4" href="/">
            Catalog
          </Link>
          <Link className="block mb-1 hover:ml-2 duration-200" href="/">
            Stock
          </Link>
          <Link className="block  mb-1 hover:ml-2 duration-200" href="/">
            Brands
          </Link>
          <Link className="block mb-1 hover:ml-2 duration-200" href="/">
            The shops
          </Link>
          <Link className="block mb-1 hover:ml-2 duration-200" href="/">
            Personal Area
          </Link>
          <Link className="block hover:ml-2 duration-200" href="/">
            Around work
          </Link>
        </div>

        <div className="col">
          <Link className="block mb-4 font-bold" href="/">
            Help
          </Link>
          <Link className="text-gray-300 mb-1 block hover:pl-2 duration-200" href="/">
            How to make an order
          </Link>
          <Link className="text-gray-300 mb-1 block hover:pl-2 duration-200" href="/">
            {' '}
            Shipping and payment
          </Link>
          <Link className="text-gray-300 mb-1 block hover:pl-2 duration-200" href="/">
            Exchange and return{' '}
          </Link>
          <Link className="text-gray-300 mb-1 block hover:pl-2 duration-200" href="/">
            Questions and answers
          </Link>
          <Link className="text-gray-300 mb-1 block hover:pl-2 duration-200" href="/">
            Gift cards
          </Link>
        </div>
        <div className="col">
          <Link className="block mb-4 font-bold" href="/">
            our company
          </Link>
          <Link className="text-gray-300 mb-1 block hover:ml-2 duration-200" href="/">
            Story
          </Link>
          <Link className="text-gray-300 mb-1 block hover:ml-2 duration-200" href="/">
            Blog
          </Link>
          <Link className="text-gray-300 mb-1 block hover:ml-2 duration-200" href="/">
            Cooperation
          </Link>
          <Link className="text-gray-300 mb-1 block hover:ml-2 duration-200" href="/">
            Contacts
          </Link>
          <Link className="text-gray-300 mb-1 block hover:ml-2 duration-200" href="/">
            The shops
          </Link>
        </div>
        <div className="col">
          <Link className="block font-bold text-xl" href="/">
            +212 693 485 629
          </Link>
          <div className="media my-4 flex gap-4 justify-around">
            <Link className="h-10 w-10 flex justify-center place-items-center rounded-full border-2 border-white" href="/">
              <FaFacebookF />
            </Link>
            <Link className="h-10 w-10 flex justify-center place-items-center rounded-full border-2 border-white" href="/">
              <AiOutlineTwitter />
            </Link>
            <Link className="h-10 w-10 flex justify-center place-items-center rounded-full border-2 border-white" href="/">
              <BsTelegram />
            </Link>
            <Link className="h-10 w-10 flex justify-center place-items-center rounded-full border-2 border-white" href="/">
              <AiFillYoutube />
            </Link>
          </div>
          <div className="span mb-4 block">Contact Us</div>
          <input type="text" className="outline-none bg-transparent border-white rounded-lg border p-2 px-4" placeholder="left us a message" />
        </div>
      </div>
      <div className="last border-t-2 border-t-white border-dashed text-white text-center pt-6">Copyright © 1999-2023 Boardify. All rights reserved.</div>
    </div>
  );
};

export default Footer;
