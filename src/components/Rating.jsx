import React from "react";
import { Star } from "lucide-react";

const Rating = ({ productDetails }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < Math.round(productDetails.rating) ? "gold" : "none"}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">
        ({productDetails.reviews?.length || 0} reviews)
      </span>
    </div>
  );
};

export default Rating;
