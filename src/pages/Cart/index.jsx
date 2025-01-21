import  { useContext } from "react";
import CartTile from "../../components/CartTile";
import { MyContext } from "../../context";

export default function Cart() {
  const { cart } = useContext(MyContext);

  return (
    <>
      <h1 className="p-5">Cart Products</h1>
      
      <div className="flex w-full flex-col lg:flex-row">
        {cart.some(item=>item)?<ul className="bg-cyan-900 flex-1">
          {cart.map((item) => {
            return (
              <li key={item.id}>
                <CartTile item={item} />
              </li>
            );
          })}
        </ul>: <div className="bg-cyan-900 md:flex-1"> <p className="font-semibold text-6xl pt-20">cart is empty</p></div> }
        
        <div className="h-96 bg-cyan-950 sticky top-0 ">
          <div className="bg-slate-900 h-64 pt-14">
            {" "}
            <p className="text-4xl  p-5">
              Cart Price:-{" "}
              {cart
                .reduce((c, itr) => {
                  return (c = c + itr.totalprice);
                }, 0)
                .toFixed(2)}
            </p>
            <p className="text-2xl">
              ( cart saving:{" "}
              {cart.reduce((total, item) => {
                const saving =
                  (100 / (100 - item?.discountPercentage)) *
                    item?.price *
                    item?.quantity -
                  item?.totalprice;
                  return (total = total + saving);
              },0).toFixed(2)} )
            </p>
            
          </div>
          <button className="py-5 px-10 m-8 bg-black">BUY ALL</button>
        </div>
      </div>
    </>
  );
}
