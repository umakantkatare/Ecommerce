import React, { useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* 🔹 Static data (outside component for performance) */
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    discount: 20,
    slug: "mobile-accessories",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    discount: 15,
    slug: "mens-watches",
  },
  {
    id: 3,
    name: "Laptop",
    price: 49.99,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop",
    discount: 5,
    slug: "laptops",
  },
  {
    id: 4,
    name: "Fragrances",
    price: 29.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    discount: 25,
    slug: "fragrances",
  },
  {
    id: 5,
    name: "Women-shoes",
    price: 79.99,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    discount: 10,
    slug: "womens-shoes",
  },
  {
    id: 6,
    name: "Men-Shoes",
    price: 89.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    discount: 30,
    slug: "mens-shoes",
  },
];

const TopProducts = () => {
  const navigate = useNavigate();
  const goToCategory = (slug) => {
    if (!slug) return;
    navigate(`/products/category/${slug}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Product Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {featuredProducts.map(({ id, name, slug, image, discount }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
              onClick={() => goToCategory(slug)}
            >
              {/* Image */}
              <div className="relative bg-gray-100 h-58 flex items-center justify-center">
                <div className="absolute w-full h-full inset-0 aspect-4/3 overflow-hidden rounded-t-xl bg-gray-100 hover:scale-110">
                  <img
                    src={image}
                    alt={name}
                    className="  w-full h-full object-cover transition-transform duration-500 "
                  />

                  {/* Black Overlay Layer */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {/* Aap yahan "View Product" ya koi icon bhi daal sakte hain */}{" "}
                    View Product
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                  {name}
                </h3>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
