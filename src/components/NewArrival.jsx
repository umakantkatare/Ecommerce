import { useNavigate } from "react-router-dom";

const NewArrival = () => {
  const navigate = useNavigate();
  const goToCategory = (slug) => {
    if (!slug) return;
    navigate(`/products/category/${slug}`);
  };
  const categories = [
    { name: "Premium Shirts", icon: "👔", slug: "mens-shirts" },
    { name: "Designer Dresses", icon: "👗", slug: "womens-dresses" },
    { name: "Sports Gear", icon: "⚽", slug: "sports-accessories" },
    { name: "Smart Devices", icon: "📱", slug: "smartphones" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            <p className="text-gray-600 mt-2">Check out our latest products</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.slug}
              onClick={() => goToCategory(category.slug)}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer "
            >
              <div className="text-6xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
