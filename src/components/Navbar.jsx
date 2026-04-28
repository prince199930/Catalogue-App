import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          MyStore
        </h1>

      

        <div className="p-2 rounded-full hover:bg-gray-200 transition">
          <FaShoppingCart className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;