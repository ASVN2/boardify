import Image from 'next/image';
import img1 from '../public/brands/01.png';
import img2 from '../public/brands/02.png';
import img3 from '../public/brands/03.svg';
import img4 from '../public/brands/04.png';
import img5 from '../public/brands/05.png';
import img6 from '../public/brands/06.png';

const Brands = () => {
  return (
    <div className="grid grid-cols-auto-small gap-5 justify-around place-items-center my-24 ">
      <Image className="" src={img1} alt="brad-1" />
      <Image className="" src={img2} alt="brad-2" />
      <Image className="" src={img3} alt="brad-3" />
      <Image className="" src={img4} alt="brad-4" />
      <Image className="" src={img5} alt="brad-5" />
      <Image className="" src={img6} alt="brad-6" />
    </div>
  );
};

export default Brands;
