import React, { useEffect, useState } from 'react';
import Sidebar from '../components/general/sidebar';
import Header from '../components/general/header';

import './../assets/css/seller.css';
import { Outlet } from 'react-router-dom';
import { use } from 'react';
const Seller = () => {

  
  return (
 
    <div class="container-fluid">
    <div class="row">
      {/* Sidebar */}
      <div class="col-md-3 sidebar bg-light">
        {/* Sidebar content  */}
        <Sidebar/>
      </div>
       {/* Main content */}
      <div class="col-md-9 p-0">
        <Header/>
        <div class="dashboard p-0">
          {/*  Dashboard content */}
        <Outlet/>
        </div>
      </div>
    </div>
  </div>
  
    
    
  );
}
  export default Seller;