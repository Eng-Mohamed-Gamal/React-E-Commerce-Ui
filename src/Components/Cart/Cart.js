import React from 'react'
import { Data } from '../Deals/Deals'
import { useProductsContext } from '../Context/Context'

export default function Cart() {
  const {CartItem , addToCart , removeFromCart , addToCartByValue , clear} = useProductsContext()
  return (
<div className="cart">
  <div className="container">
    
    {Data.map(item => {
      if(CartItem[item.id] !== 0) {
        return (
          <div className="all" key={item.id}>
         <div className="flex">
          <div className="one">
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <p>{item.name}</p>
            <p>{item.price}$ * {CartItem[item.id]} = ${item.price *  CartItem[item.id]} </p>
          </div>
          <div className="two">
            <button className="btn"><i class="fa-solid fa-plus" onClick={ ()=> addToCart(item.id)} ></i></button>
            <button className="btn"><i class="fa-solid fa-minus" onClick={ ()=> removeFromCart(item.id)}></i></button>
          </div>
         </div>
          </div>
        )
      }
    })}
  </div>
</div>
  )
}
