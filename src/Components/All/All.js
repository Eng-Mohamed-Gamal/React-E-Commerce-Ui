import React from 'react'
import Home from '../Home/Home'
import Deals from '../Deals/Deals'
import Cate from '../Cate/Cate'
import Arrivals from '../Arrivals/Arrivals'

export default function All({addToCart}) {
  return (
 <div className="all">
    <Home></Home>
    <Deals></Deals>
    <Cate></Cate>
    <Arrivals></Arrivals>
 </div>
  )
}
