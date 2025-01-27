import React, { useEffect } from 'react';
import Stats from '../../components/seller/stat';

import OrderSta from '../../components/seller/orderSta';
import SalesAnalytic from '../../components/seller/saleAnalytic';
import RecentIvoice from '../../components/seller/recentInvoice';


const Dashboard = () => {
  // give page title
   useEffect(() => {
    document.title = "Seller Dashboard"
  }, []);
  return (
    <div className="dashboard m-5">
      
  <Stats/>
      <div className='row mt-4 '>

<OrderSta/>
<SalesAnalytic/>
      </div>
      <div className='row mt-4'>
        <RecentIvoice/>
        </div>
   

    </div>
  );
};

export default Dashboard;
