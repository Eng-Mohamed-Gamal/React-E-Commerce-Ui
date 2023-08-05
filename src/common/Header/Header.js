import React from "react";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../../Components/Context/Context";

export default function Header() {
const {CartItem} = useProductsContext() 
const total = ()=> {
  let num = 0 ;
  for (let item in CartItem) {
    if(CartItem[item] > 0 ) {
      num += CartItem[item]
    }
  } 
  return (num) ;
}
   const num =  total()

  return (
    <div className="header">
      <div className="container">
        <div className="flex">
          <h1>Bonik</h1>
          <ul>
            <li>
              <NavLink to={"/"}>
                
                <i class="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Cart"}>
                <i class="fa-solid fa-cart-shopping"></i>
                <span>{num}</span> 
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
