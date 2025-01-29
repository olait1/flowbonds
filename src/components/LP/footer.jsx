import React from "react";

const Footer = () => {
  return ( 
<>
  {/* Footer Section */}
  <footer style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
  <div className="container">
    <div className="row">
      {/* Flowbonds Section */}
      <div className="col-md-3">
        <h5 style={{ display: "block", textAlign: "justify" }}>Flowbonds</h5>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Best Marketplace connecting Sellers and Buyers of all Kind with no effort seamlessly
        </p>
        <div style={{ display: "block", textAlign: "justify" }}>
          <a href="#" className="text-muted me-3">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-muted me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-muted">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
        </div>
      </div>

      {/* Sellers & Buyers Section */}
      <div className="col-md-3">
        <h5 style={{ display: "block", textAlign: "justify" }}>Sellers & Buyers</h5>
        <ul className="list-unstyled text-muted" style={{ textAlign: "justify" }}>
          <li><a href="#" className="text-muted">Find Favourites</a></li>
          <li><a href="#" className="text-muted">Post Favourites</a></li>
          <li><a href="#" className="text-muted">Refund Policy</a></li>
          <li><a href="#" className="text-muted">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Drivers Section */}
      <div className="col-md-3">
        <h5 style={{ display: "block", textAlign: "justify" }}>Drivers</h5>
        <ul className="list-unstyled text-muted" style={{ textAlign: "justify" }}>
          <li><a href="#" className="text-muted">Find Work</a></li>
          <li><a href="#" className="text-muted">Create Account</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="col-md-3">
        <h5 style={{ display: "block", textAlign: "justify" }}>Call Us</h5>
        <ul className="list-unstyled text-muted" style={{ textAlign: "justify" }}>
          <li><i className="fa fa-map-marker-alt fa-sm"></i> Nigeria</li>
          <li><a href="tel:+2348030842088" className="text-muted">
              <i className="fa fa-phone fa-sm"></i> +2348030842088</a></li>
          <li><a href="mailto:flowbonds@gmail.com" className="text-muted">
              <i className="fa fa-envelope fa-sm"></i> flowbonds@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>



</>


   );
};

export default Footer;
