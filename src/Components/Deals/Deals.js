import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data =  [
      {
        id: 1,
        discount: 50,
        cover: "./images/flash/flash-1.png",
        name: "Shoes",
        price: 100,
      },
      {
        id: 2,
        discount: 40,
        cover: "./images/flash/flash-2.png",
        name: "Watch",
        price: 20,
      },
      {
        id: 3,
        discount: 40,
        cover: "./images/flash/flash-3.png",
        name: "Smart Mobile Black",
        price: 200,
      },
      {
        id: 4,
        discount: 40,
        cover: "./images/flash/flash-4.png",
        name: "Smart Watch Black",
        price: 50,
      },
      {
        id: 5,
        discount: 50,
        cover: "./images/flash/flash-5.png",
        name: "glass",
        price: 100,
      },
      {
        id: 6,
        discount: 50,
        cover: "./images/slidecard/slide-3.png",
        name: "Shoes",
        price: 100,
      },
    ]
  
function SampleNextArrow(props) {
    const {onClick} = props
    return <div className="next" onClick={onClick}><i class="fa-solid fa-arrow-right"></i></div>
}
function SamplePrevArrow(props) {
    const {onClick} = props
    return <div className="prev" onClick={onClick}><i class="fa-solid fa-arrow-left"></i></div>
}


export default function Deals() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
<div className="deals">
<h1 className='cen' >  <i class="fa-solid fa-bolt"></i>  Flash <span>Deals</span> </h1>
<div className="container">
<Slider {...settings} >
{data.map(box => {
    return (
        <div className="slick" key={box.id}>
            <div className="pad">{box.discount}% off</div>
            <div className="img"><img src={box.cover} alt="" /></div>
            <p>{box.name}</p>
            <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="flex">
                <p>{box.price}.00</p>
                <button className="btn"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
})}
</Slider>
</div>
</div>
  )
}
