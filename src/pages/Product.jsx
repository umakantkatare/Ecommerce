import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `https://dummyjson.com/products/category/smartphones`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.products);
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:justify-center md:justify-center xl:grid-cols-4 2xl:grid-cols-5 gap-5 my-2 p-2">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
