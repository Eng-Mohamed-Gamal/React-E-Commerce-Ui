import React from 'react'
const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]

export default function Services() {
  return (
    <div className="service over">
        <h1 className="cen"><i class="fa-brands fa-servicestack"></i> Our Servicees</h1>
        <div className="container">
            {data.map((box , index) => {
                return(
                    <div className="box" key={index} >
                        <div className="icon">{box.cover}</div>
                        <h4>{box.title}</h4>
                        <p>{box.decs}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
