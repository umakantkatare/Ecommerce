import React, { useContext, useState } from "react";
import { SquareMinus } from "lucide-react";
import { SquarePlus } from "lucide-react";
import useCart from "../hooks/useCart";

const Cart = () => {
  const {
    cart,
    removeToCart,
    decreaseQty,
    increaseQty,
    totalPrice,
    totalItems,
    qty,
  } = useCart();

  if (cart.length === 0) {
    <h2 className="text-center text-white text-2xl mt-10">
      No Product Added Yet 😢
    </h2>;
  }

  return (
    <>
      <div className="w-full max-w-6xl mx-auto bg-white text-black border rounded-md p-4 md:p-6 min-h-[56vh] my-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Shopping Cart
        </h2>

        {cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row gap-4 md:gap-6 border-t pt-4 md:pt-6 "
          >
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-36 md:w-36 md:h-40 object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-medium">
                {product.title}
              </h3>

              {product.inStock && (
                <p className="text-green-600 text-sm mt-1">In stock</p>
              )}

              {product.freeShipping && (
                <p className="text-sm text-gray-600 mt-1">
                  Eligible for{" "}
                  <span className="font-semibold">FREE Shipping</span>
                </p>
              )}

              {product.fulfilled && (
                <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mt-2">
                  fulfilled
                </span>
              )}

              {/* Gift */}
              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" />
                <p className="text-sm">
                  This will be a gift{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Learn more
                  </span>
                </p>
              </div>

              {/* Variants */}
              {product.color && (
                <p className="text-sm mt-2">
                  <span className="font-semibold">Colour:</span> {product.color}
                </p>
              )}
              {product.size && (
                <p className="text-sm">
                  <span className="font-semibold">Size:</span> {product.size}
                </p>
              )}

              {/* Quantity + Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
                <div className="flex items-center px-3 py-1 border rounded w-fit">
                  <SquareMinus
                    className="cursor-pointer"
                    onClick={() => decreaseQty(product.id)}
                  />
                  <span className="mx-3 font-medium">{product.qty}</span>
                  <SquarePlus
                    className="cursor-pointer"
                    onClick={() => increaseQty(product.id)}
                  />
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-blue-600 font-semibold">
                  <button onClick={() => removeToCart(product.id)}>
                    Delete
                  </button>
                  <button>Save for later</button>
                  <button>See more like this</button>
                  <button>Share</button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-left md:text-right mt-4 md:mt-6">
              <p className="font-semibold text-base md:text-lg">
                Subtotal: ₹ {(product.qty * product.price).toLocaleString()}
              </p>
            </div>
          </div>
        ))}

        {cart.length > 0 ? (
          <div className="pt-4 mt-6 border-t text-right">
            <p className="font-semibold text-lg">Total items: {totalItems}</p>
            <p className="font-semibold text-lg">
              Total: ₹ {totalPrice.toLocaleString()}
            </p>
          </div>
        ) : (
          <div className="text-xl md:text-2xl font-medium text-center py-10">
            No Products in Cart
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
