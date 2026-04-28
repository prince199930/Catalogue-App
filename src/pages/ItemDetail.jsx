import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemDetail = () => {
  const { name } = useParams();
  const items = useSelector((state) => state.catalog.items);

  const item = items.find((i) => i.itemname === name);

  if (!item) return <div>Item not found</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-5 rounded-xl shadow">
      <img
        src={item.image}
        alt={item.itemname}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{item.itemname}</h1>
      <p className="text-gray-500">{item.category}</p>

      <div className="mt-4 space-y-2">
        {item.itemprops.map((prop, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-1"
          >
            <span className="font-medium">{prop.label}</span>
            <span>{prop.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;