import { createContext, useState } from "react";
import { useContext } from "react";
import { data } from "../Deals/Deals";


const {pro} = data ;



const productContext = createContext();

export const Context = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);


  const addToCart = (product) => {
     let isProduct = cartItem.find((item) => item.id === product.id);
     if (isProduct) {
       setCartItem(cartItem.map(item => item.id === product.id ? { ...isProduct, qty: isProduct.qty + 1 } : item  ));
      }
      console.log(cartItem);
  };

  const decrementQty = (pro) => {
    const isProduct = cartItem.find((item) => item.id === pro.id);
    if (isProduct.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== pro.id));
    } else {
      setCartItem(cartItem.map((item) => item.id === pro.id ? { ...isProduct, qty: isProduct.qty - 1 } : item));
    }
  };

  return (
    <productContext.Provider value={{ addToCart, decrementQty, cartItem }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
