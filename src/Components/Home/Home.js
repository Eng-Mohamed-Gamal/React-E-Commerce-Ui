import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sdata = [
  {
    id: 1,
    title: "30% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-1.png",
  },
  {
    id: 2,
    title: "20% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-2.png",
  },
  {
    id: 3,
    title: "40% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-3.png",
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-4.png",
  },
]


export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed: 3000,
  };


  return (
<div className="home">
  <div className="container">
    <Slider {...settings} >
    {Sdata.map(box => {
      return (
        <div className="box" key={box.id} >
          <div className="con">
            <h1>{box.title}</h1>
            <p>{box.desc}</p>
            <button>Visit Collections</button>
          </div>
          <div className="img">
            <img src={box.cover} alt="" />
          </div>
        </div>
      )
    })}
    </Slider> 
  </div>
</div>
  )
}
