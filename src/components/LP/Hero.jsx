import React from "react";
import heroImg from "./../../assets/img/heroImg.png"; // Ensure this path is correct
import Navbar from "./Navbar"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="" id="hero-bg" >
  {/* <div class="wave-clip">
  <h1>In and Out Curve</h1>
</div> */}



      {/* Hero Section */}
      <div className="row container-fluid py-5  text-white  " id="home" >
        <div className="col-md-12 ">
 

            <Navbar/>

            <div className="row mt-5 "  id="hero">
        <div className="col-10 text-dark container ">
          <div className="row">
            <div className="col-md-9">

           
          <h1 className="display-5 fw-bold mt-lg-5 " style={{ textAlign : "justify" }}>
          Seamlessly Connecting Sellers and Buyers of all Kind...   </h1>
          <p className="lead text-justify  mt-lg-5 text-dark" style={{ textAlign : "justify", fontWeight:'bolder'}}>
          Join Flowbonds today to experience Seamless Solutions, Infinite Possibilities in an ever-evolving digital world...
       
          </p>
          <div className="mt-3 py-md-5 py-lg-5">
            <Link to='/auth/seller/' className="btn btn-primary me-3">Log In</Link>
            <Link to='/auth/seller/signup' className="btn btn-primary">Join us by signing up</Link>
          </div>
          </div>
          </div>
        </div>
        <div className="col-md- text-center" >
        
        </div>
        </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default Hero;
