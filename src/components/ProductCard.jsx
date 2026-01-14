import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
     <div
      onClick={() => navigate(`/productDetails/${product.id}`)}
      className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
    >
      {/* Image */}
      <img
        src={product?.thumbnail}
        alt={product?.title || "product image"}
        className="w-full h-56 object-contain"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-md font-semibold text-gray-800">
          {product?.title}
        </h2>

        {/* Brand & Category */}
        <p className="text-sm text-gray-500">
          {product?.brand} • {product?.category}
        </p>

        {/* Price & Discount */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            ${product?.price}
          </span>
          <span className="text-sm text-red-500">
            {product?.discountPercentage}% OFF
          </span>
        </div>

        {/* Rating & Availability */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>⭐ {(product?.rating).toFixed(1)}</span>
          <span>{product?.availabilityStatus}</span>
        </div>

        {/* Stock */}
        <p className="text-sm text-gray-600">
          Stock: <span className="font-medium">{product?.stock}</span>
        </p>

        {/* Shipping */}
        <p className="text-sm text-gray-600">
          🚚 {product?.shippingInformation}
        </p>

        {/* Warranty & Return */}
        <p className="text-sm text-gray-600">
          🛡 {product?.warrantyInformation}
        </p>
        <p className="text-sm text-gray-600">🔄 {product?.returnPolicy}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 ">
          {product?.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          disabled={!product}
          className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div></>
  );
};

export default ProductCard;
