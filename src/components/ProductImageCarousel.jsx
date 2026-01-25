import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImageCarousel = ({ productDetails }) => {
  const [activeImage, setActiveImage] = useState(0);
  const images = productDetails?.images || [];
  return (
    <div className="w-full md:w-1/2">
      <div className="relative w-full h-64 md:h-6/7 overflow-hidden">
        {/* Active Image */}
        <img
          src={images[activeImage]}
          alt={productDetails.title}
          className="w-full h-full object-contain transition duration-300"
        />

        {/* Left Button */}
        {activeImage > 0 && (
          <button
            onClick={() => setActiveImage(activeImage - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2
                   bg-white/80 hover:bg-white
                   p-2 rounded-full shadow text-black"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Right Button */}
        {activeImage < images.length - 1 && (
          <button
            onClick={() => setActiveImage(activeImage + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2
                   bg-white/80 hover:bg-white
                   p-2 rounded-full shadow text-black"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 px-2 overflow-x-auto justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setActiveImage(index)}
            className={`h-16 w-16 object-cover rounded cursor-pointer border
          ${activeImage === index ? "border-blue-600" : "border-gray-300"}`}
            alt="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
