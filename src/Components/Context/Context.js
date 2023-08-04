import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { Hdata } from "../Home/Home";
// import { data }from "../Deals/Deals";

const productContext = createContext();

export const Context = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

useEffect((pro)=>{
    let isProduct = cartItem.find((item) => item.id === pro.id);
    console.log(isProduct);

    if (isProduct) {
      setCartItem(cartItem.map(item => item.id === pro.id ? { ...isProduct, qty: isProduct.qty + 1 } : item));
    } else {
      setCartItem([...cartItem, { ...pro, qty: 1 }]);
    }
}, )

  const decrementQty = (pro) => {
    const isProduct = cartItem.find((item) => item.id === pro.id);
    if (isProduct.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== pro.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === pro.id ? { ...isProduct, qty: isProduct.qty - 1 } : item
        )
      );
    }
  };

  return (
    <productContext.Provider value={{ useEffect, decrementQty, cartItem }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
