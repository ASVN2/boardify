'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const data = [
  // {
  //   id: 1,
  //   title: 'Skis',
  //   description: 'Hit the slopes in style with our high-performance skis. Our skis are designed with the latest technology to give you the best skiing experience possible.',
  //   image: '/slider/01.jpg',
  //   discount: '-30%',
  // },
  {
    id: 2,
    title: 'Snowboards',
    description: 'Experience the thrill of snowboarding with our top-quality snowboards. Our boards are designed with advanced materials to provide maximum control and speed.',
    image: '/slider/02.jpg',
    discount: '-20%',
  },
  // {
  //   id: 3,
  //   title: 'Ice Skates',
  //   description:
  //     'Get ready to hit the ice with our durable and comfortable ice skates. Our skates are designed to provide excellent support and control, making them perfect for both beginners and experienced skaters.',
  //   image: '/slider/03.jpg',
  //   discount: '-50%',
  // },
  // {
  //   id: 4,
  //   title: 'Figure Skates',
  //   description:
  //     'Perfect your figure skating moves with our high-quality figure skates. Our skates are designed with precision and comfort in mind, making them ideal for competitive and recreational skaters alike.',
  //   image: '/slider/04.webp',
  //   discount: '-15%',
  // },
];

const Sliding = () => {
  return (
    <div className="h-[400px] mt-10">
      {data &&
        data.map((prodact) => {
          return (
            <div key={prodact.title} className="relative rounded-md h-full overflow-hidden">
              <Image src={prodact.image} width="1200" height="200" className="rounded-md flex bg-center -translate-y-[50%]" />
              <div className="overlay w-full h-full bg-[#0000006b] z-10 absolute top-0 left-0"></div>
              <div className="info absolute top-0 left-0 flex z-20  flex-col justify-center h-full p-10  ">
                <div className="left">
                  <p className="text-4xl text-white font-bold ">{prodact.title}</p>
                  <div className="des text-xl text-white mt-8 w-[60%]">{prodact.description}</div>
                  <button className="text-white border-2 border-white p-2 w-fit px-4  text-md hover:bg-green-300 hover:text-black mt-4 hover:scale-110 duration-300 ">
                    Buy Now
                  </button>
                </div>
                <div className="right text-4xl bg-green-400 p-10 ml-auto text-white rounded-md w-fit px-4">{prodact.discount}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Sliding;
