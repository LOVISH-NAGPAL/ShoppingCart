import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
import { MyContext, MyProvider } from "../../context";
import { stringify } from "postcss";

export default function ProductList() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const { cart, setcart, HandleAddToCart, getdata } = useContext(MyContext);

  function handleSingleProduct(id, item) {
    navigate(`/productlist/${id}`, { state: item });
  }

  async function fetchproduct() {
    const result = await fetch("//dummyjson.com/products").then((response) =>
      response.json()
    );
    setdata(result.products);
    getdata(data);
  }
  useEffect(()=>console.log(data),[data])

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <div className="border ">
      <button
          className="fixed right-3 p-5 bg-cyan-700  rounded-full  z-10 bottom-3 "
          onClick={() => {
            navigate("/cart");
          }}>
          Cart
        </button>
      <h1 className="m-3">List Of Products</h1>
      <ul className="grid  grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-4">
        {" "}
        {data.map((item) => {
          return (
            <li key={item.id} className="border align-item bg-slate-600">
              <div className="c1 ">
                <img
                  src={item?.images[0]}
                  className="w-24 border bg-slate-900 h-[230px]"
                  alt=""
                />
                <p className="bg-green-700">
                  ${item.price}
                  <span className="line-through ml-5">
                    $
                    {(
                      (100 / (100 - item?.discountPercentage)) *
                      item?.price
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                className=" bg-cyan-700 hover:opacity-75 w-30"
                onClick={() => {
                  handleSingleProduct(item.id, item);
                }}>
                Buy
              </button>
              <button
                className="w-20 bg-yellow-600 disabled:opacity-50"
                onClick={() => {
                  HandleAddToCart(item);
                }}
                disabled={cart.some((cartitem) => {
                  return cartitem.id === item.id;
                })}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
