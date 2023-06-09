import axios from 'axios';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import { CgShoppingBag } from 'react-icons/cg';

const Page = async ({ params }) => {
  const headers = {
    'X-Master-Key': '$2b$10$tHxPySVVItB/EQxEjnAIEepcaLRyQkE7YZVjP7XobdwHrz5EnTK3q',
  };

  const response = await axios.get('https://api.jsonbin.io/v3/b/64338b0eace6f33a220805e8', { headers });
  const data = response.data;
  const sprodact = data.record.prodacts.filter((p) => p.id === `${params.prodact}`);
  const prodact = sprodact[0];

  return (
    <div className="max-w-[1200px] min-w[250px] px-6 mx-auto  mt-10 ">
      <Link className="flex gap-2 place-items-center mb-16 text-xl border border-black p-2 px-2 hover:bg-black hover:text-white duration-300" href="/">
        {' '}
        <IoMdArrowBack /> Back{' '}
      </Link>
      <div className="holder md:flex-row lg:flex-row xl:flex-row flex-col  flex gap-10 ">
        <h1 className="text-2xl block md:hidden lg:hidden xl:hidden">{prodact.name}</h1>
        <div className="image flex-1 flex place-items-center">
          <img className="rounded-md w-[80%]" src={prodact.image} />
        </div>
        <div className="info flex-1 ">
          {/* <h1 className="text-6xl hidden md:block lg:block xl:block">{prodact.name}</h1> */}
          <p className="mt-6 text-gray-400">{prodact.description}</p>
          <p className="text-4xl mt-3">{prodact.price} $ </p>
          <div className="colors flex gap-2 my-4 ">
            {prodact.color.map((color) => {
              return (
                <span
                  style={{
                    backgroundColor: `${color}`,
                  }}
                  className={`h-6 w-6 block rounded-full border-2 border-black text-white `}></span>
              );
            })}
          </div>
          <div className="deb flex gap-3 text-md mb-24 md:mb-10 xl:mb-10 lg:mb-10">
            <span className="text-white bg-black p-1 px-3 rounded-md">{prodact.type}</span>
            <div className="rate flex gap-1 place-items-center text-white bg-black p-1 px-3 rounded-md">
              {prodact.rate} <AiFillStar className="text-white" />
            </div>
          </div>
          <Link
            href="/payment"
            className="border justify-center flex gap-2 place-items-center  fixed lg:relative xl:relative md:relative left-0  w-full xl:w-fit lg:w-fit md:w-fit bottom-0  text-xl bg-gray-200 text-center py-4 px-6  text-black border-black hover:bg-black hover:text-white  hover:scale-110 duration-300 ">
            <CgShoppingBag />
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
