import Link from 'next/link';

const ProdactCard = ({ prodact }) => {
  return (
    <Link href={`/${prodact.id}`} className="gap-6 my-2 ">
      <div className="card p-4 flex gap-6 rounded-md flex-col justify-between h-full border border-black ">
        <img className=" rounded-md" src={prodact.image} alt="" />
        <div className="info">
          <div className=" flex justify-between mb-3 gap-4 flex-wrap">
            <h3 className="text-gray-900 text-xl  font-bold my-1">{prodact.price}</h3>
            <span className="bg-black p-1 text-white px-4 rounded-md">{prodact.type}</span>
          </div>
          <h1 className="font-bold text-md text-xl mb-2">{prodact.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default ProdactCard;
