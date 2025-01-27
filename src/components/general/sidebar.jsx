import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../../assets/css/seller.css';
import Logo from './../../assets/img/Logo-beside_1.png';
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar bg-light vh-100 d-flex flex-column justify-content-between">
      <div>
        <h2 className="text-center mb-5 py-3">  
    <img src={Logo} alt="" srcset="" width={150} />
    </h2>
        <small className="bold text-muted px-3">Main Menu</small>
        <ul className="list-unstyled ps-0 mt-3">
          <li className={`mb-3 ps-3 ${location.pathname === '/seller/dashboard' ? 'active' : ''}`}>
            
            <Link 
              to="/seller/dashboard" 
              className="text-dark" 
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-home me-2"></i> 
              Home
            </Link>
          </li>
          <li className={`mb-3 ps-3 ${location.pathname === '/seller/order' ? 'active' : ''}`}>
            <Link to="/seller/order"  className="text-dark"   style={{ textDecoration: 'none' }}>
            <i className="fas fa-box me-2"></i> Orders
            </Link>
          </li>
          <li className="mb-3 ps-3">
            <i className="fas fa-plus-circle me-2"></i> New Listing
          </li>
          <li className="mb-3 ps-3">
            <i className="fas fa-envelope me-2"></i> Messages
          </li>
          <li className="mb-3 ps-3">
            <i className="fas fa-cog me-2"></i> Settings
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <small className="bold text-muted px-3">Help & Support</small>
        <ul className="list-unstyled ps-0 mt-3">
          <li className="mb-3 ps-3">
            <i className="fas fa-question-circle me-2"></i> Help Center
          </li>
          <li className="mb-3 ps-3">
            <i className="fas fa-tools me-2"></i> Technical Support
          </li>
        </ul>
      </div>
      <button className="btn btn-danger m-3">
        <i className="fas fa-sign-out-alt me-2"></i> Log Out
      </button>
    </div>
  );
};

export default Sidebar;