import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import { useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {
  const items = useSelector((state) => state.catalog.items);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // FILTER LOGIC ✅
  const filteredItems = items.filter((item) => {
    const matchSearch = item.itemname
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  // GROUP AFTER FILTER
  const grouped = filteredItems.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <Hero
        setSearch={setSearch}
        setCategory={setCategory}
      />

      <div className="max-w-7xl mx-auto mt-20 px-4">
        {Object.keys(grouped).length === 0 ? (
          <p className="text-center text-gray-500">
            No products found 😢
          </p>
        ) : (
          Object.keys(grouped).map((category) => (
            <CategorySection
              key={category}
              category={category}
              items={grouped[category]}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;