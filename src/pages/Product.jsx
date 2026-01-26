import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useApiFetch } from "../hooks/useApiFetch";
import { baseUrl } from "../util/constant";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { get } = useApiFetch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await get(`${baseUrl}/products`);
        setData(response.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center h-screen items-center">
        <p className="text-red-500 text-lg">{error} </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 m-2 p-2 mx-auto">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
