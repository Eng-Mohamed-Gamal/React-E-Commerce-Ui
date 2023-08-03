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
        </ul>
</div>
    </div>
  </div>
  )
}
