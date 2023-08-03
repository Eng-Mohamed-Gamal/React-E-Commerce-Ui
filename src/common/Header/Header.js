import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
  <div className="header">
<div className="container">
<div className="flex">
        <h1>Bonik</h1>
        <ul>
            <li><NavLink to={"/"} > <i class="fa-solid fa-house"></i>   </NavLink></li>
            <li><NavLink to={"/Cart"} > <i class="fa-solid fa-cart-shopping"></i> <span></span>  </NavLink></li>
        </ul>
</div>
    </div>
  </div>
  )
}
