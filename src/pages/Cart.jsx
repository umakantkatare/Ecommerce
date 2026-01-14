import React, { useContext, useState } from "react";
import { SquareMinus } from "lucide-react";
import { SquarePlus } from "lucide-react";
import useCart from "../hooks/useCart";

const Cart = () => {


  const { cart,
    removeToCart,
    decreaseQty,
    increaseQty,
    totalPrice,
    totalItems,
    qty, } = useCart()

  if (cart.length === 0) {
    <h2 className="text-center text-white text-2xl mt-10">
      No Product Added Yet 😢
    </h2>;
  }
  // console.log(cart);

  return (
    <>
      <div>
        {/* {cart.map((product) => ( */}
        <div className="w-full max-w-6xl mx-auto bg-white text-black border rounded-md p-6">
          {/* Header */}
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          {cart.map((product) => (
            <div key={product.id} className="flex gap-6 border-t pt-6">
              {/* Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-36 h-40 object-contain"
              />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-medium">{product.title}</h3>

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
                  <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mt-1">
                    fulfilled
                  </span>
                )}

                {/* Gift */}
                <div className="flex items-center gap-2 mt-2">
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
                    <span className="font-semibold">Colour:</span>{" "}
                    {product.color}
                  </p>
                )}
                {product.size && (
                  <p className="text-sm">
                    <span className="font-semibold">Size:</span> {product.size}
                  </p>
                )}
                {/* Quantity + Actions */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center  px-3 py-1">
                    <SquareMinus
                      className="cursor-pointer text-lg"
                      onClick={() => decreaseQty(product.id)}
                    />
                    <span className="mx-3 font-medium">{product.qty}</span>
                    <SquarePlus
                      className="cursor-pointer text-lg"
                      onClick={() => increaseQty(product.id)}
                    />
                  </div>

                  <div className="flex gap-4 text-sm text-blue-600 font-semibold ">
                    <button
                      onClick={() => removeToCart(product.id)}
                      className=" cursor-pointer"
                    >
                      Delete
                    </button>
                    <button className="cursor-pointer">Save for later</button>
                    <button className="cursor-pointer">
                      See more like this
                    </button>
                    <button className="cursor-pointer">Share</button>
                  </div>
                </div>
              </div>

              {/* Price and subTotal */}
              <div className="flex flex-col justify-end pt-4 mt-6">
                <div className="text-right font-semibold text-lg">
                  Price: ₹ {(product.price * qty).toLocaleString()}
                  {/* <span> total price:</span> { (totalPrice).toFixed(2)} */}
                </div>
                <p className="text-lg font-semibold">
                  Subtotal: ₹ {(product.qty * product.price).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

        { cart.length > 0  ? <div className="flex flex-col justify-end pt-4 mt-6 border-t ">
            <p className="text-right font-semibold text-lg">
              total-item = {totalItems}
            </p>
            <p className="text-right font-semibold text-lg">
              Total: ₹ {totalPrice.toLocaleString()}
            </p>
          </div> : <div className="text-2xl font-medium text-center"> No Products in Cart</div> }
        </div>

        {/* // ))} */}
      </div>
    </>
  );
};

export default Cart;
