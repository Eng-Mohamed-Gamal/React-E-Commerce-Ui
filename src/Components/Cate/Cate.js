import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tdata = [
    {
      cover: "./images/top/category-1.png",
      para: "headphone",
      desc: "3k orders this week",
    },
    {
      cover: "./images/top/category-2.png",
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: "./images/top/category-3.png",
      para: "sunglass",
      desc: "6k orders this week",
    },
    {
      cover: "./images/top/category-2.png",
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: "./images/top/category-3.png",
      para: "sunglass",
      desc: "6k orders this week",
    },
  ]


export default function Cate() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        //   {
        //     breakpoint: 1000,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: false,
        //     },
        //   },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      };

  return (
    <div className="cate">
        <h1 className="cen">  <i class="fa-regular fa-calendar-days"></i>  Top Categories</h1>
      <div className="container">
        <Slider {...settings}> 
        {Tdata.map( (box , index) => {
            return (
                <div className="box" key={index}>
                    <div className="right">{box.desc}</div>
                    <div className="left">{box.para}</div>
                    <img src={box.cover} alt="" />
                </div>
            )
        } )}
        </Slider>
      </div>
    </div>
  );
}
