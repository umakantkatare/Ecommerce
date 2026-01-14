import React, { useEffect, useState } from "react";
import { fetchCategoryProduct } from "../api/categoryApi";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useApiFetch } from "../hooks/useApiFetch";
import { baseUrl } from "../util/constant";

const CategoryResult = () => {
  // const { slug } = useParams();
  const [categories, setcategories] = useState([]);

  const categoriesList = Array.isArray(categories) &&  categories?.slice(0, 8);

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
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center justify-center gap-2 py-3 px-5 overflow-x-hidden">
          {Array.isArray(categories) &&
            categoriesList.map((result) => {
              return (
                <div
                  key={result.slug}
                  className="px-6 py-2 text-white rounded-full transition whitespace-nowrap font-medium capitalize"
                  onClick={() => navigate(`/products/category/${result.slug}`)}
                >
                  {result.slug}
                </div>
              );
            })}
        </Link>
      </div>
    </div>
  );
};

export default CategoryResult;
