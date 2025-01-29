import React from "react";
import AboutImg from "./../../assets/img/aboutImg.png"; // Ensure this path is correct
import Navbar from "./Navbar"
const Hero = () => {
  return (

<section className="hero-sectio text-center py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-lg-non position-relative">
             
              <img
                src={AboutImg}
                alt="Lady with banner"
                className="img-fluid rounded"
              />
              <div className="position-absolute stat" style={{ top:150, left:'60%', }}>
                
                 <div>
                  <h4>500+</h4>
                  <p>Sellers, Buyers & Drivers</p>
                </div>
                <div>
                  <h4>300+</h4>
                  <p>Products & Services Posted</p>
                </div>
            </div>
            
            </div>
            <div className="col-md-6 text-md-left text-center">
              <h1 className="text-muted display-6">We Offer The Best <span className="text-primary">Market </span>Experience</h1>
              <p className="text-muted">
    At Flowbonds, we are dedicated to providing a seamless and efficient marketplace experience. Our platform connects sellers and buyers, ensuring that you have access to a wide range of products and services. Whether you are looking to buy, sell, deliver, or render services, Flowbonds is your go-to solution for all your marketplace needs.
  </p>             <div className="d-flex justify-content-between mt-3">
             
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
