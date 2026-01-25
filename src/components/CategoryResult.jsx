import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiFetch } from "../hooks/useApiFetch";
import { baseUrl } from "../util/constant";

const CategoryResult = () => {
  const [categories, setcategories] = useState([]);

  const categoriesList = Array.isArray(categories) && categories?.slice(0, 8);

  const { get } = useApiFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const getCategoriesData = async () => {
      const category = await get(`${baseUrl}/products/categories`);
      setcategories(category);
    };
    getCategoriesData();
  }, []);
  return (
    <div className="bg-gray-700 border-t border-gray-700">
      <div className="min-w-[86vw] mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className="
          flex gap-3 py-3
          overflow-x-auto
          scrollbar-hide
          sm:justify-center
        "
        >
          {Array.isArray(categoriesList) &&
            categoriesList.map((result) => (
              <button
                key={result.slug}
                onClick={() => navigate(`/products/category/${result.slug}`)}
                className="
                px-4 sm:px-6 py-2
                text-white bg-gray-600
                rounded-full
                whitespace-nowrap
                font-medium capitalize
                transition
                hover:bg-gray-500
                shrink-0
              "
              >
                {result.slug}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryResult;
