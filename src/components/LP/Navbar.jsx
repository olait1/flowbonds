import React from "react";
import { Link } from "react-router-dom";
import './../../assets/css/lp.css'; // Ensure this import is present
import Logo from './../../assets/img/Logo-beside_1.png'; // Ensure this path is correct
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar col-md-10 container navbar-expand-lg navbar-light bg-light py-3" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#home">
            <img src={Logo} alt="" srcset="" width={150} />
            {/* FlowBonds */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">
                  Browse Marketplace
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth/seller/">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary ms-2" to="/auth/seller/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;