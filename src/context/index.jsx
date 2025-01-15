import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [cart, setcart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Sync the cart state with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // Only update localStorage when cart changes
  function HandleAddToCart(item) {
    if (
      cart.some((cartitem) => {
        return cartitem.id === item.id;
      })
    ) {
      // Update the quantity and totalprice for the existing item
      const updatedCart = cart.map((cartitem) =>
        cartitem.id === item.id
          ? {
              ...cartitem,
              quantity: cartitem.quantity + 1, // Increase quantity
              totalprice: (cartitem.quantity + 1) * cartitem.price, // Update total price
            }
          : cartitem
      );

      // Update the cart state and localStorage with the updated cart
      setcart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the item is not in the cart, add it with initial quantity and price
      item = { ...item, quantity: 1, totalprice: item.price };
      const updatedCart = [...cart, item];

      // Update the cart state and localStorage with the updated cart
      setcart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function removeFromCart(item) {
    if (item.quantity > 1) {
      const updatedcart = cart.map((cartitem) => {
        return cartitem.id === item.id
          ? { ...cartitem, quantity: cartitem.quantity - 1 ,totalprice:(cartitem.quantity-1)*cartitem.price}
          : cartitem;
      });
      setcart(updatedcart);
      localStorage.setItem("cart", JSON.stringify(updatedcart));
    } else {
      const updatedCart = cart.filter((cartitem) => !(cartitem.id === item.id));
      setcart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function getdata(data) {
    setdata(data);
  }
  return (
    <MyContext.Provider
      value={{ cart, setcart, HandleAddToCart, getdata, removeFromCart }}>
      {children}
    </MyContext.Provider>
  );
};
