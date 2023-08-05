import React from 'react'


const Ndata = [
    {
      cover: "./images/arrivals/arrivals1.png",
      name: "Sunglass",
      price: "150",
    },
    {
      cover: "./images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
    },
    {
      cover: "./images/arrivals/arrivals3.png",
      name: "Smart Watch",
      price: "50",
    },
    {
      cover: "./images/arrivals/arrivals4.png",
      name: "Lipstick",
      price: "15",
    },
    {
      cover: "./images/arrivals/arrivals5.png",
      name: "Green Plant",
      price: "10",
    },
    {
      cover: "./images/arrivals/arrivals6.png",
      name: "Bonsai tree",
      price: "400",
    },
  ]
  

export default function Arrivals() {
  return (
<div className="arrive over" >
    <h1 className="cen">  <i class="fa-solid fa-business-time"></i>   New Arrivals</h1>
    <div className="container">
        {Ndata.map((box , index) =>{
            return (
                <div className="box" key={index}>
                    <img src={box.cover} alt="" />
                    <h4>{box.name}</h4>
                    <p>{box.price}$</p>
                </div>
            )
        })}
    </div>
</div>
  )
}
