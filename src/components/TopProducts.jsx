import React, { useState } from "react";
import { Star } from "lucide-react";

const TopProducts = () => {
  const [cartCount, setCartCount] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      rating: 4.5,
      image: "🎧",
      discount: 20,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      rating: 4.8,
      image: "⌚",
      discount: 15,
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      rating: 4.3,
      image: "💻",
      discount: 0,
    },
    {
      id: 4,
      name: "Yoga Mat",
      price: 29.99,
      rating: 4.6,
      image: "🧘",
      discount: 25,
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: 79.99,
      rating: 4.4,
      image: "☕",
      discount: 10,
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 89.99,
      rating: 4.7,
      image: "👟",
      discount: 30,
    },
  ];
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Products</h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-7xl group-hover:scale-110 transition">
                  {product.image}
                </div>
                {product.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={addToCart}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
