import React from 'react'
import Home from '../Home/Home'
import Deals from '../Deals/Deals'
import Cate from '../Cate/Cate'
import Arrivals from '../Arrivals/Arrivals'
import Discount from '../Discount/Discount'
import Mobile from '../Mobile/Mobile'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'

export default function All({addToCart}) {
  return (
 <div className="all">
    <Home></Home>
    <Deals></Deals>
    <Cate></Cate>
    <Arrivals></Arrivals>
    <Discount></Discount>
    <Mobile></Mobile>
    <Banner></Banner>
    <Services></Services>
 </div>
  )
}
