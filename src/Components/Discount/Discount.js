import React from 'react'

const Ddata = [
    {
      cover: "./images/discount/discount-1.png",
      name: "BenuX 2022",
      price: "$250",
    },
    {
      cover: "./images/discount/discount-2.png",
      name: "Sony TV 1080p",
      price: "$450",
    },
    {
      cover: "./images/discount/discount-3.png",
      name: "Sony PS4",
      price: "$50",
    },
    {
      cover: "./images/discount/discount-4.png",
      name: "Setgearr 2022",
      price: "$100",
    },
    {
      cover: "./images/discount/discount-5.png",
      name: "Tony BGB",
      price: "$20",
    },
    {
      cover: "./images/discount/discount-6.png",
      name: "RG products",
      price: "$200",
    },
    {
      cover: "./images/discount/discount-7.png",
      name: "Ranasonic 2022",
      price: "$300",
    },
    {
      cover: "./images/discount/discount-8.png",
      name: "Pune HD",
      price: "$30",
    },
    {
      cover: "./images/discount/discount-9.png",
      name: "Sony CCTV",
      price: "$80",
    },
  ]

export default function Discount() {
  return (
<div className="discount over ">
<h1 className="cen">  <i class="fa-solid fa-gift"></i>   Big Discounts</h1>
    <div className="container">
        {Ddata.map((box , index) =>{
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
