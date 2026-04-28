import ItemCard from "./ItemCard";

const CategorySection = ({ category, items }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-black pl-3">
                {category}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <ItemCard key={item.itemname} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CategorySection;