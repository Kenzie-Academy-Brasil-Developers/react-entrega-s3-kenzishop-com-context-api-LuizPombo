import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...list, item];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeFromCart = (item) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = list;

    const local = newCart.indexOf(
      newCart.find((element) => element.name === item.name)
    );

    newCart.splice(local, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
