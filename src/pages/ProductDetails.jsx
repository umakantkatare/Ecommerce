import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import ProductImageCarousel from "../components/ProductImageCarousel";
import Rating from "../components/Rating";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        setProductDetails(res.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [productId]);

  if (error) return <p className="text-center mt-10">{error}</p>;
  if (!productDetails) return <p className="text-center mt-10"><Skeleton height={300} /></p>;

  return (
    <div className="px-4 py-6 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md border overflow-hidden flex flex-col md:flex-row">
        {/* IMAGE CAROUSEL */}
        <ProductImageCarousel productDetails={productDetails} />

        {/* CONTENT */}
        <div className="w-full md:w-1/2 p-4 md:p-0 space-y-3 md:my-10">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {productDetails.title}
          </h2>

          {/* Brand */}
          <p className="text-sm md:text-base font-bold text-gray-700">
            Brand: {productDetails.brand}
          </p>

          {/* Category */}
          <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">
            {productDetails.category}
          </span>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 line-clamp-3">
            {productDetails.description}
          </p>

          {/* Rating */}
          <Rating productDetails={productDetails} />

          {/* Price */}
          <div className="flex items-center gap-3">
            <p className="text-lg md:text-xl font-bold text-green-600">
              ${productDetails.price}
            </p>
            <p className="text-xs md:text-sm text-red-500">
              {productDetails.discountPercentage}% OFF
            </p>
          </div>

          {/* Stock */}
          <div className="flex gap-4 text-xs md:text-sm">
            <p>
              Stock: <span className="font-medium">{productDetails.stock}</span>
            </p>
            <p className="text-green-600 font-medium">
              {productDetails.availabilityStatus}
            </p>
          </div>

          {/* Shipping */}
          <div className="text-xs text-gray-500 space-y-1">
            <p>🚚 {productDetails.shippingInformation}</p>
            <p>🛡 {productDetails.warrantyInformation}</p>
            <p>↩ {productDetails.returnPolicy}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {productDetails.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => addToCart(productDetails)}
            className="w-full md:w-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-sm font-medium transition active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
