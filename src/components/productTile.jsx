import React, { useContext } from "react";
import { MyContext, MyProvider } from "../context";

export default function ProductTile({ id, data }) {
  const { cart, HandleAddToCart } = useContext(MyContext);
  
  
  return (
    <div className="min-w-96 min-h-96 bg-slate-700 border py-5 w-full">
      <div className="flex w-full h-full bg-slate-700 mx-auto  items-center sm:gap-10 justify-center">
        <div className=" min-h-[200px] w-full flex gap-2 justify-center align-middle flex-wrap ">
          {
            data.images.map((img, index) => {
              return (<div key={index} className="w-full">                <img src={img} key={index} className="w-[250px]  h-[230px] text-center"/>
              </div>

              )
            })
          }
        </div>
        <div className="border w-full max-h-full bg-blue-950 p-5">
          <p className="text-3xl">
            $ {data.price}
            <span className="line-through ml-5">
              $
              {((100 / (100 - data?.discountPercentage)) * data?.price).toFixed(
                2
              )}
            </span>
          </p>
          <p>Rating {data.rating}</p>
          <div className="">
            <ul className="text-2xl p-10">
              Comments
              <div className=" text-left">
                {" "}
                {data.reviews.map((a, b) => {
                  return (
                    <p key={b} className="text-sm ">
                      <span className="">{a.comment}</span>
                    </p>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <button
        className=" bg-yellow-600 mt-10 disabled:opacity-50"
        onClick={() => {
          HandleAddToCart(data);
        }}
        disabled={cart.some((cartitem) => {
          return cartitem?.id === data?.id;
        })}>
        Add To Cart
      </button>
    </div>
  );
}
