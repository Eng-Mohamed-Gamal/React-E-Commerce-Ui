import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { Data } from "../Deals/Deals";


const productContext = createContext();

const defaultValue =  () => {
  let cart = {} ;
  for (let i = 1 ; i <= Data.length ; i++) {
    cart[i] = 0
  }
  return cart ;
}



export const Context = ({ children }) => {
  const [CartItem, setCartItem] = useState(defaultValue());
  
  const addToCart = (id)=> {
    setCartItem((prev) => ({...prev , [id] : prev[id] + 1}) )
    console.log(CartItem)
  }
  const removeFromCart = (id)=> {
    setCartItem((prev) => ({...prev , [id] : prev[id]-1}) )
  }
  const addToCartByValue = (id , value) => {
    setCartItem((prev) => ({...prev , [id] : value}) )
  }
  const clear = ()=> {
    setCartItem(defaultValue())
  }

return (
  <productContext.Provider value={{CartItem , addToCart , removeFromCart , addToCartByValue , clear}}>
    {children}
  </productContext.Provider>
)
  

};

export const useProductsContext = () => {
  return useContext(productContext);
};
