import React, { useEffect } from 'react';
import Stats from '../../components/seller/stat';

import OrderSta from '../../components/seller/orderSta';
import SalesAnalytic from '../../components/seller/saleAnalytic';
import RecentIvoice from '../../components/seller/recentInvoice';
import { useSelector } from 'react-redux';


const Dashboard = () => {
    const value = useSelector((state) => state.global.value);
    
  // give page title
   useEffect(() => {
    document.title = "Seller Dashboard"
  }, []);
  return (
    <>
  
    <div className={`dashboard my-5 ${value ? 'ml-260': 'px-5'}`} >
      {console.log(value)
      }
  <Stats/>
      <div className='row mt-4 '>

<OrderSta/>
<SalesAnalytic/>
      </div>
      <div className='row mt-4'>
        <RecentIvoice/>
        </div>
   

    </div>
  
  </>
  );
};

export default Dashboard;
