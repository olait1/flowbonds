import React, { useRef, useEffect } from "react";
import heroImg from "./../../assets/img/heroImg.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./../../assets/css/lp_hero.css";
import { motion } from "framer-motion";
import { ParticlesBackground } from "../particules/particules";

const Hero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  const drops = Array.from({ length: 10 });

  useEffect(() => {
    const resizeHandler = () => {
      if (heroRef.current && particlesRef.current) {
        particlesRef.current.style.height = `${heroRef.current.offsetHeight}px`;
      }
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler(); // Call it initially to set the height
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="position-relative drop-container" id="hero-bg" ref={heroRef} >
       
       <div
        className="particles-container      "
        ref={particlesRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }} // z-index is important
      >
          <ParticlesBackground /> {/* Render the ParticlesBackground component here */}
      
     </div>
      
      <div className="row container-fluid py-5 text-white" id="home">
        <div className="col-md-12">
          <Navbar />

          <div className="row mt-5" id="hero">
            {/* ... (Your hero content) ... */}
         
         
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