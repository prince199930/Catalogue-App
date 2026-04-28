import { useState } from "react";

const Filters = ({ categories, onFilter }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const handleFilter = (value, type) => {
    if (type === "search") setSearch(value);
    if (type === "category") setSelected(value);

    onFilter({
      search: type === "search" ? value : search,
      category: type === "category" ? value : selected,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      
      <input
        type="text"
        placeholder="Search products..."
        className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-pink-400 outline-none"
        onChange={(e) => handleFilter(e.target.value, "search")}
      />

      <select
        className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
        onChange={(e) => handleFilter(e.target.value, "category")}
      >
        <option>All</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;