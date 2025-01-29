import React, { useEffect, useState } from 'react';
import Sidebar from '../components/general/sidebar';
import Header from '../components/general/header';
import './../assets/css/seller.css';
import { Outlet } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Seller = () => {
   const value = useSelector((state) => state.global.value);

  
  return (
 
    <div className="container-fluid">
    <div className="row">
      {/* Sidebar */}
     
      <div className={`${value ? 'col-md-3' : 'd-none'} sidebar bg-light`}>
        {/* Sidebar content  */}
        <Sidebar/>
      </div>
       {/* Main content */}
      <div className={`${!value ? 'col-md-12' : ' col-md-9'} p-0`}>
        <Header/>
        <div className="dashboard p-0">
          {/*  Dashboard content */}
        <Outlet/>
        </div>
      </div>
    </div>
  </div>
  
    
    
  );
}
  export default Seller;