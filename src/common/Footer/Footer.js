import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Footer() {

const[text] = useTypewriter({
    words : ['Jemy' , 'Front-End-Developer'],
    loop : {} ,
})

  return (
    <div className="footer">
        <div className="container">
            <div className="one">
                <h3>Bonik</h3>
                <p className='f' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, dolore?</p>
                <div className="flex">
                    <div className="play"><p> <i class="fa-brands fa-google-play"></i>    Google Play</p></div>
                    <div className="play"><p>  <i class="fa-brands fa-app-store-ios"></i>   App Store</p></div>
                </div>
            </div>
            <div className="two">
                <h3>About Us</h3>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privcacy Policy</li>
                </ul>
            </div>
            <div className="three">
                <h3>Customer Care</h3>
                <ul>
                    <li>Help Center</li>
                    <li>How To Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchsing</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div className="four">
                <h3>Contact Us</h3>
                <p>Egypt , Cairo , 6,October </p>
                <p>Email : mohmed555asdfgh@gmail.com</p>
                <p>Phoone : 01012707504</p>
            </div>
        </div>
        <div className="jemy">
          Made By  {text}
        </div>
    </div>
  )
}
