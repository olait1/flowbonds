import React from "react";
import logoIcon from "./../../assets/img/logo.png"
import graphicIcon from "./../../assets/img/graphic.png"
import seoIcon from "./../../assets/img/seo.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const service_product = [
    {
         icon:logoIcon,
    title : "Logo",                        
    description: "Professional design solutions for your business.",
    amount: 300
},
{ 
    icon:seoIcon,
    title : "SEO",                        
    description: "Improve your site's SEO for higher rankings.",
    amount: 200
},
{
     icon:graphicIcon,
    title : "Graphics",                        
    description: "Professional design solutions for your business.",
    amount: 500
}
]



// Custom Next Arrow Component
function NextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <button 
      className={className + ' btn'}
      style={{ 
        ...style, 
        display: "block", 
        backgroundColor: "#055c9d", 
        borderRadius: "50%",
        color:'#fff',
        width: "40px", 
        height: "40px",
        border: "none",
        outline: "none",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      &rarr;
    </button>
  );
}

// Custom Previous Arrow Component
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button 
      className={className + ' btn'}
      style={{ 
        ...style, 
        display: "block", 
        backgroundColor: "#ffffff", 
        color: "#000",
        borderRadius: "50%", 
        width: "40px", 
        height: "40px",
        border: "none",
        outline: "none",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      &larr;
    </button>
  );
}




const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 slides at a time
  slidesToScroll: 1, // Scroll 1 slide at a time
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [ // Add responsiveness for smaller screens
    {
      breakpoint: 768, // Adjust breakpoint as needed
      settings: {
        slidesToShow: 1, // Show 1 slide on smaller screens
      },
    },
    {
      breakpoint: 1024, // Adjust breakpoint as needed
      settings: {
        slidesToShow: 2, // Show 2 slides on medium screens
      },
    },
  ],
};



const Services = () => {
  return (

    <section className="recently-posted py-5 bg-light">
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-12">
        <div className="d-flex justify-content-between align-items-center">
  {/* Left Section */}
  <div className="d-flex flex-column align-items-start">
    <p className="text-muted">The latest Product & Services!</p>
    <p className="text-muted display-6">
      Recently Posted <span className="text-primary">Works</span>
    </p>
  </div>

  {/* Right Section */}
  <div className="d-flex align-items-center">
    {/* Left Arrow */}
    {/* {settings.prevArrow} */}
    {/* <button
      className="h4 btn d-flex justify-content-center align-items-center"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        marginRight: "10px",
        cursor: "pointer",
      }}
    >
      &larr;
    </button> */}
{/* {settings.nextArrow} */}
    {/* Right Arrow */}
    {/* <button
      className="h4 btn d-flex justify-content-center align-items-center text-light"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#055c9d",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      &rarr;
    
    </button> */}
    {/* <button type="button" data-role="none" className="btn btn-danger slick-arrow slick-prev" style={{display: 'block'  }}> Previous</button>
  */}
  </div>
</div>


        </div>
      </div>
      <div className="row">
      
<div className="container">
<div className="slideshow">
<Slider {...settings}>
  {service_product.map((service, id) => (
    <div key={id} className="px-2">
      <div className="card text-center shadow-sm same-height-card d-flex flex-column h-100">
        <div className="card-body d-flex flex-column">
          <img 
            src={service.icon} 
            alt={service.icon} 
            className="mx-auto" 
            style={{ height: "100px", marginBottom: "10px" }} 
          />
          <h5 className="card-title d-flex align-items-center justify-content-center">
            <span>{service.title}</span>
          </h5>
          <p className="card-text text-muted flex-grow-1">{service.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">
              Highest bid: <br />$ {service.amount}
            </span>
            <a href="#" className="text-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>
  </div>
    </div>
      </div>
    </div>
  </section>
  
    
  )
}
export default Services