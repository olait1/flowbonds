import React from "react";
import logoIcon from "./../../assets/img/logo.png"
import graphicIcon from "./../../assets/img/graphic.png"
import seoIcon from "./../../assets/img/seo.png"
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
    <span
      className="h4 d-flex justify-content-center align-items-center"
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
    </span>

    {/* Right Arrow */}
    <span
      className="h4 d-flex justify-content-center align-items-center text-light"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#055c9d",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      &rarr;
    </span>
  </div>
</div>


        </div>
      </div>
      <div className="row">
        {service_product.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
          <div className="card text-center shadow-sm same-height-card">
            <div className="card-body">
             
                <img src={service.icon} alt="" style={{ height: "100px", marginRight: "10px" }} />
                <h5 className="card-title d-flex align-items-center justify-content-center">
                  <span>{service.title}</span>
              </h5>
              <p className="card-text text-muted">{service.description}</p>
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
      </div>
    </div>
  </section>
  
    
  )
}
export default Services