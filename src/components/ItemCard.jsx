import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/item/${item.itemname}`)}
      className="bg-white rounded-3xl p-3 hover:shadow-2xl hover:shadow-2xl transition duration-300 hover:-translate-y-1"
    >
      
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.itemname}
          className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">
          {item.itemname}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {item.category}
        </p>

        <div className="mt-3 text-black font-medium opacity-0 group-hover:opacity-100 transition">
          View Details →
        </div>
      </div>
    </div>
  );
};

export default ItemCard;