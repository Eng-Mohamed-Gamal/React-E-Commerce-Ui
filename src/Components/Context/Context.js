import { createContext,useState } from "react";
import { useContext } from "react";

const productContext = createContext({});

  export  const Context = ({children}) => {
const [cartItem , setCrtItem] = useState([]);

const addToCart = (pro)=>{
    const isProduct = cartItem.find(item => item.id === pro.id)

    if(isProduct) {
      setCrtItem(cartItem.map(item => item.id === pro.id ? {...pro , qty : isProduct.qty + 1} : item  ))
    }else{
      setCrtItem([...cartItem , {...pro , qty : 1}])
    }
}

const decrementQty = (pro)=> {
  const isProduct = cartItem.find(item => item.id === pro.id);
  if(isProduct.qty === 1){
    setCrtItem(cartItem.filter(item => item.id !== pro.id  ))
  }else{
    setCrtItem(cartItem.map(item => item.id === pro.id ? {...pro , qty : isProduct.qty - 1} : item  ))
  }
}

return (
  <productContext.Provider value={{addToCart , decrementQty ,cartItem , setCrtItem}} >
    {children} 
  </productContext.Provider>
)

}

export const useProductsContext = () => {
  return useContext(productContext)
}


