import { createContext, useState } from "react";
import { useContext } from "react";
import { Data } from "../Deals/Deals";

const productContext = createContext();

const defaultValue = () => {
  let cart = {};
  for (let i = 1; i <= Data.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Context = ({ children }) => {
  const [CartItem, setCartItem] = useState(defaultValue());

  const total = () => {
    let total = 0;
    for (let item in CartItem) {
      if (CartItem[item] > 0) {
        let info = Data.find((pro) => pro.id === Number(item));
        total += info.price * CartItem[item];
      }
    }
    return total;
  };

  const all = total();

  const addToCart = (id) => {
    setCartItem((prev) => ({
      ...prev,
      [id]: isNaN(prev[id]) ? 1 : prev[id] + 1,
    }));
  };
  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const addToCartByValue = (id, value) => {
    setCartItem((prev) => ({ ...prev, [id]: value }));
  };

  const clear = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: 0 }));
  };

  const clearAll = () => {
    setCartItem(defaultValue());
  };

  return (
    <productContext.Provider
      value={{
        CartItem,
        addToCart,
        removeFromCart,
        addToCartByValue,
        clearAll,
        clear,
        all,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
