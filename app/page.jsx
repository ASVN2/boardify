import axios from 'axios';
import React from 'react';
import ListPodact from './ListPodact';
import Navbar from './Navbar';
import Overbar from './Overbar';
import Sliding from './Sliding';
import imageZise from '../public/board.png';
import Image from 'next/image';
import Brands from './Brands';
import Footer from './Footer';

const page = async () => {
  const headers = {
    'X-Master-Key': '$2b$10$tHxPySVVItB/EQxEjnAIEepcaLRyQkE7YZVjP7XobdwHrz5EnTK3q',
  };

  const response = await axios.get('https://api.jsonbin.io/v3/b/64338b0eace6f33a220805e8', { headers });
  const data = response.data;

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Overbar />
        <Navbar />
        <Sliding />
        <ListPodact data={data} title={'Out Best Pordacts'} start={0} end={4} />
        <div className="store my-20">
          <h1 className="text-2xl  mb-2 font-bold">Our Store</h1>
          <div className="flex gap-4">
            <img className="rounded-md" src="https://www.blogto.com/listings/fashion/upload/2011/07/20110705-sanction-9.jpg" alt="image-13" />
            <img className="rounded-md" src="https://www.blogto.com/listings/fashion/upload/2011/07/20110705-sanction-1.jpg" alt="image-14" />
          </div>
        </div>
        <ListPodact data={data} title={'Our Pupler Pordact'} start={6} end={10} />
        <div className="choose flex gap-4 justify-between my-20 text-white bg-[#1d1f20] p-6 rounded-lg place-items-center">
          <div className="text">
            <p className="text-2xl font-semibold">HOW TO CHOOSE THE RIGHT SIZE?</p>
            <div className="buttons flex gap-6 mt-4">
              <button className="p-2 px-4 border-2 border-orange-500 rounded-full hover:bg-orange-500 duration-300">Snowboard</button>
              <button className="p-2 px-4 border-2 border-orange-500 rounded-full hover:bg-orange-500 duration-300">Skateboard</button>
            </div>
          </div>
          <Image src={imageZise} alt="imageZise" />
        </div>
        <ListPodact data={data} title={'All Pordacts'} start={0} end={0} />

        <Brands />
      </div>
      <Footer />
    </>
  );
};

export default page;
