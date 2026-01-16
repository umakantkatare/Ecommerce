import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";

const ProductDetails = () => {
  const { addToCart } = useCart;
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProductDetails(res.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [productId]);
  useEffect(() => {
  }, [productDetails]);

  if (error) return <p>{error}</p>;
  if (!productDetails) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-center m-4">
        <div className="max-w-sm lg:min-w-[60vw] lg:flex lg:justify-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border p-3">
          {/* Image */}
          <div className="w-1/3">
            <img
              src={productDetails.images[2]}
              alt={productDetails.title}
              className="w-full lg:w-[20vw] h-full object-cover rounded-t-xl"
            />
          </div>

          {/* Content */}
          <div className="w-2/3">
            <div className="p-4 space-y-2">
              {/* Title & Brand */}
              <h2 className="text-2xl font-semibold text-gray-800">
                {productDetails.title}
              </h2>
              <p className="text-lg text-gray-700 font-bold">
                Brand: {productDetails.brand}
              </p>

              {/* Category */}
              <span className="inline-block text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">
                {productDetails.category}
              </span>

              {/* Description */}
              <p className="text-md text-gray-600 font-semibold line-clamp-3">
                {productDetails.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-semibold">
                  {/* ⭐ {productDetails.rating.toFixed(1)} */}
                  {/* {Array.from({length: 5}, (_, i) => {
                  i={i} 
                })} */}
                </span>
                <span className="text-xs text-gray-500">
                  ({productDetails.reviews.length} reviews)
                </span>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-3 mt-2">
                <p className="text-xl font-bold text-green-600">
                  ${productDetails.price}
                </p>
                <p className="text-sm text-red-500">
                  {productDetails.discountPercentage}% OFF
                </p>
              </div>

              {/* Stock & Availability */}
              <div className="flex gap-3 text-sm">
                <p className="text-gray-700">
                  Stock:{" "}
                  <span className="font-medium">{productDetails.stock}</span>
                </p>
                <p className="text-green-600 font-medium">
                  {productDetails.availabilityStatus}
                </p>
              </div>

              {/* Shipping & Warranty */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>🚚 {productDetails.shippingInformation}</p>
                <p>🛡 {productDetails.warrantyInformation}</p>
                <p>↩ {productDetails.returnPolicy}</p>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
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
                className="w-50 mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium active:scale-99 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
