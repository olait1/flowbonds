import React, { useEffect, useState } from 'react';
import pp from './../../assets/img/my_p.jpg';
import SearchBar from './search_bar';
import { useUserContext } from '../../contextProvider/userContext';
import Logo from './../../assets/img/Logo-fb.png';
import Toggler from './toggler';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const value = useSelector((state) => state.global.value);
  

  const [checkPage, setCheckPage] = useState(false);
  // get the user from the context
    const {user, setUser}=useUserContext();
   
console.log(value);


  useEffect(()=>{
    // check if the user is on the order page
    if (  location.pathname != '/seller/order') {
      setCheckPage(true)

      

    }else{
      setCheckPage(false)
    }
   
  });
 

  
  return (
    <>
    
    <div
      className="header d-flex align-items-center     px-lg-2"
      style={{
        marginLeft: !value ? 0 :'250px', // Sidebar width
        // width: !value ?'100%':'calc(100% - 250px)', // Full width minus sidebar
        height: '70px', // Header height
        position: 'fixed', // Keeps the header at the top
        top: 0,
        zIndex: 1000, // Ensures header is above other content
      }}>
          <Toggler /> 
          { !value && 
      <img src={Logo} alt="" className='logo' srcset="" width={80} />
           } 
      <h3 className="mb-0 d-none d-lg-block">Welcome Back,{user.name}</h3>
   <SearchBar placeholder='Search anything...'/>
      <span className="text-muted mx-lg- d-none d-lg-block">|</span>
      <i className="fa fa-envelope  text-muted mx-lg-" style={{ cursor: 'pointer' }}></i>
      <i className="fa fa-bell text-muted mx-lg-" style={{ cursor: 'pointer' }}></i>
      <div
        className="rounded-circle "
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
      <div className="profile me-4 d-none d-lg-block">
        <span className="text-muted" style={{ cursor: 'pointer' }}>
          {user.name} <i className="fa fa-caret-down"></i>
        </span>
      </div>
    </div>

      
    </>
  );
};

export default Header;
