import React from "react";
import { Data } from "../Deals/Deals";
import { useProductsContext } from "../Context/Context";

export default function Cart() {
  const {
    CartItem,
    addToCart,
    removeFromCart,
    addToCartByValue,
    clearAll,
    clear,
    all,
  } = useProductsContext();
  return (
    <div className="cart">
      <h1 className="cen">
        Your Cart <span>{all <= 0 ? "Is Empty" : "Has Products"}</span>
      </h1>
      <div className="container">
        {Data.map((item)=> {
          if (CartItem[item.id] !== 0 && !isNaN(CartItem[item.id])) {
            return (
              <div className="all" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="flex">
                  <div className="one">
                    <div className="con">
                      <p>{item.name}</p>
                      <p>
                        {item.price}$ * {CartItem[item.id]} =
                        <span> ${item.price * CartItem[item.id]}</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="two">
                    <button className="btn" onClick={() => addToCart(item.id)}>
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <input
                      type="number"
                      placeholder="Write A Count"
                      onChange={(e) =>
                        addToCartByValue(item.id, parseInt(e.target.value))
                      }
                    />
                    <button
                      className="btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="clear">
                  <button onClick={() => clear(item.id)}>clear</button>
                </div>
              </div>
            );
          }
        })}
      </div>
      {all > 0 && (
        <div className="clear">
          <button onClick={() => clearAll()}>Clear All</button>
          <h1>Total : {all}</h1>
        </div>
        
      )}
    </div>
  );
}
