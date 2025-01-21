import React, { useContext } from "react";
import { MyContext } from "../context";

export default function CartTile({ item }) {
  const { cart, removeFromCart, HandleAddToCart } = useContext(MyContext);
  return (
    <>
      <div className="flex w-full lg:w-2/3 border">
        <div className="bg-black border m-2 flex-1 text-center">
          <div className="flex justify-center bg-slate-600">
            <img src={item?.images[0]} alt="" className="w-1/2 h-[180px]" />
          </div>

          <p>
            ${item?.price}{" "}
            <span className="line-through ml-5">
              $
              {((100 / (100 - item?.discountPercentage)) * item?.price).toFixed(
                2
              )}
            </span>
          </p>
        </div>
        <div className="flex-1 ">
          <div className="sm:p-5">
            <p className="text-3xl font-semibold">{item.title}</p>
            {/* <p className="text-left mt-5">{item?.description}</p> */}
            <p className="text-2xl pt-1 sm:pt-5">
               Cost= {item.totalprice.toFixed(2)}
            </p>
            <p>
              ( Saving: $
              {((((100 / (100 - item?.discountPercentage)) * item?.price)*item?.quantity)-item?.totalprice).toFixed(
                2
              )} )
            </p>
            <div className="pt-2 sm:pt-5">
              {" "}
              <button
                onClick={() => {
                  HandleAddToCart(item);
                }}>
                +
              </button>
              <span className="p-5 ">{item.quantity}</span>
              <button
                onClick={() => {
                  removeFromCart(item);
                }}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
