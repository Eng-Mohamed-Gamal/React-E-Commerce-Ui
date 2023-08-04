import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { data } from "../Deals/Deals";





const productContext = createContext();

export const Context = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);


  const addToCart = (product) => {
    const isPro = product.find((item) => item.id === data.id)

    if (isPro) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...isPro, qty: isPro.qty + 1 } : item)))
    } 
  }

  const decrementQty = (pro) => {
    const isProduct = CartItem.find((item) => item.id === pro.id);
    if (isProduct.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== pro.id));
    } else {
      setCartItem(CartItem.map((item) => item.id === pro.id ? { ...isProduct, qty: isProduct.qty - 1 } : item));
    }
  };



  return (
    <productContext.Provider value={{ addToCart, decrementQty, CartItem }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
