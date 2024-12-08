import Customers from "@/components/customers";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewArrival from "@/components/new-arrivals";
import Style from "@/components/style";
import TNavbar from "@/components/top-navbar";
import TopSelling from "@/components/top-selling";
import React from "react";



const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrival/>
      <TopSelling/>
      <Style/>
      <Customers/>
      <Footer/>
    </div>
  )
}

export default Home
