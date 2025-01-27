import React from "react"
import Hero from "../../components/LP/Hero"
import About from "../../components/LP/about"
import Services from "../../components/LP/services"
import Marketplace from "../../components/LP/Market_place"
import NewsletterSubscription from "../../components/LP/newsletter"
import Footer from "../../components/LP/footer"
import "../../assets/css/lp.css"
import SideBar from "./Sidebar"

const Home= function(){
    return(
        <>
{/* 
<div className="row container-fluid">
  <div className="col-sm-3 col-md-2">
    <SideBar />
  </div>
  <div className="col-sm-9 col-md-10"> */}
    <Hero />
    <About />
    <Services />
    <Marketplace />
    <NewsletterSubscription />
    <Footer />
  {/* </div>
</div> */}


       
        </>


    )
}
export default Home