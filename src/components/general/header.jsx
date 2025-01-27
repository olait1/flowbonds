import React, { useEffect, useState } from 'react';
import pp from './../../assets/img/my_p.jpg';
import SearchBar from './search_bar';
import { useUserContext } from '../../contextProvider/userContext';
import Logo from './../../assets/img/Logo-fb.png';
import Toggler from './toggler';
const Header = () => {
  const [checkPage, setCheckPage] = useState(false);
    const {user, setUser}=useUserContext();
  useEffect(()=>{
    if (  location.pathname != '/seller/order') {
      setCheckPage(true)

      

    }else{
      setCheckPage(false)
    }
   
  });
  return (
    <>
    <div
      className="header d-flex align-items-center justify-content-between bg-white border-bottom px-4"
      style={{
        marginLeft: '250px', // Sidebar width
        width: 'calc(100% - 250px)', // Full width minus sidebar
        height: '70px', // Header height
        position: 'fixed', // Keeps the header at the top
        top: 0,
        zIndex: 1000, // Ensures header is above other content
      }}>
          <Toggler/> 
      <img src={Logo} alt="" srcset="" width={80} />
      <h3 className="mb-0">Welcome Back,{user.name}</h3>
   <SearchBar placeholder='Search anything...'/>
      <span className="text-muted mx-3">|</span>
      <i className="fa fa-envelope text-muted mx-2" style={{ cursor: 'pointer' }}></i>
      <i className="fa fa-bell text-muted mx-2" style={{ cursor: 'pointer' }}></i>
      <div
        className="rounded-circle"
        style={{
          width: '40px',
          height: '40px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <img
          src={pp}
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="profile mx-3">
        <span className="text-muted" style={{ cursor: 'pointer' }}>
          {user.name} <i className="fa fa-caret-down"></i>
        </span>
      </div>
    </div>

      
    </>
  );
};

export default Header;
