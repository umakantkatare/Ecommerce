import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useApiFetch } from "../hooks/useApiFetch";
import { baseUrl } from "../util/constant";

const CategoryProduct = () => {
  const { slug } = useParams();
  const [products, setproducts] = useState([]);
  const { get } = useApiFetch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await get(`${baseUrl}/products/category/${slug}`);
        setproducts(res.products);
      } catch (err) {
        console.error(err);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <div className="bg-gray-900 border-t border-gray-700 min-h-[56vh]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-10 gap-5">
          {Array.isArray(products) &&
            products?.map((result) => (
              <ProductCard key={result.id} product={result} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
