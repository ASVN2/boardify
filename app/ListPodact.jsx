import ProdactCard from './ProdactCard';

const ListPodact = ({ data, title, end, start }) => {
  end == 0 ? (end = data.record.prodacts.length) : (end = end);

  return (
    <div className="list mt-12">
      <h1 className="text-4xl mb-3 font-bold">{title}</h1>
      <div class="grid grid-cols-4 gap-4 ">
        {data.record.prodacts.slice(start, end).map((prodact) => {
          return <ProdactCard prodact={prodact} />;
        })}
      </div>
    </div>
  );
};

export default ListPodact;
