import { FaPlay } from "react-icons/fa";

const Hero = ({ setSearch, setCategory }) => {
    return (
      <div className="max-w-7xl mx-auto mt-10">
        
        {/* HERO UI ABOVE SAME */}
         {/* Glass Container */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover Your <br />
            <span className="text-black">Perfect Product</span>
          </h1>

          <p className="text-gray-500 mt-4">
            Explore premium collections across Cars, Bikes, Phones & more.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Browse Products
            </button>

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="p-3 bg-gray-200 rounded-full">
                <FaPlay />
              </div>
              <span className="text-gray-600">View Demo</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
            alt="hero"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
  
        {/* FILTER BAR */}
        <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center mx-4 md:mx-20">
          
          {/* SEARCH INPUT */}
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 bg-gray-100 rounded-xl outline-none"
          />
  
          {/* CATEGORY SELECT */}
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 bg-gray-100 rounded-xl"
          >
            <option value="All">All Categories</option>
            <option value="Cars">Cars</option>
            <option value="Bikes">Bikes</option>
            <option value="Phones">Phones</option>
            <option value="Computers">Computers</option>
          </select>
  
          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;