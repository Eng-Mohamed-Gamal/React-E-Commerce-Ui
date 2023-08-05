import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="one">
                <h3>Bonik</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, dolore?</p>
                <div className="flex">
                    <div className="play"><p> <i class="fa-brands fa-google-play"></i>    Google Play</p></div>
                    <div className="play"><p>  <i class="fa-brands fa-app-store-ios"></i>   App Store</p></div>
                </div>
            </div>
            <div className="two">
                <h3>About Us</h3>
                <ul>
                    <li>Careers</li>
                    <li>OUr Stores</li>
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
        </div>
    </div>
  )
}
