import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Stats = () => {

  const value = useSelector((state) => state.global.value);
    
  return (
  <div className="stats mt-5 bg-light shadow p-4">
    <div className='px-lg-4  px-md-3 px-sm-2 static_border' >
      <h6>Customers</h6>
      <p className='h4'>1456</p>
      <small><span className='text-muted h5'>&darr;</span>+6.5% Since last week</small>
    </div>
    <div className='px-lg-4  px-md-3 px-sm-2 static_border' >
      <h6>Revenue</h6>
      <p className='h4'>#40,000</p>
      <small><span className='text-muted h5'>&uarr;</span>-0.01% Since last week</small>
    </div>
    <div className='px-lg-4 px-md-3 px-sm-2 static_border' >
      <h6>Profit</h6>
      <p className='h4'>60%</p>
      <small><span className='text-muted h5'>&darr;</span> +6.5% Since last week</small>
    </div>
    <div className='px-lg-4  px-md-3  px-sm-2 static_border' >
      <h6>Invoices</h6>
      <p className='h4'>1135</p>
      <small><span className='text-muted h5'>&uarr;</span>-0.03% Since last week</small>
    </div>
  </div>)
}
export default Stats;