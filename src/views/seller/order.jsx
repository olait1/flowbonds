import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import'./../../assets/css/seller.css'
import { useSelector } from 'react-redux';
import RecentIvoice from '../../components/seller/recentInvoice';
import { useUserContext } from '../../contextProvider/userContext';

const Order = () => {
   const value = useSelector((state) => state.global.value);
      
    // give page title
    useEffect(() => {
        document.title = "Seller Order"
      }, []);
    const {user,setUser}=useUserContext();
return(
  <>
   <div className=" row mt-5"      style={{
        marginLeft: value?'250px' : '10px', // Sidebar width
        width: value? 'calc(100% - 250px)':'99.1%', // Full width minus sidebar
        height: '70px', // Header height
        position: 'absolute', // Keeps the header at the top
        top: 0,
        // zIndex: 1000, // Ensures header is above other content
      }}>
     
        <div className="col-md-12  mt-3 p-4 pl-5 bg-light ">
<div className='d-flex pt-3  pl-5 justify-content-between align-items-center'>


    <h5 className="fw-bold pl-5">Good Morning {user.name}</h5>

    <button className="btn btn-md" style={{ border:'solid 1px #222' }}>Create new order</button>

    </div>
    
</div>
 
    </div>
      
     <div className={`dashboard my-5  ${value?'ml-260':'mx-100'}`}>
     

<div className="row pt-5  mt-5">
  
    <div className="col-md-8 mt-4 mx-auto order-nav bg-light border-dark mx-auto p-3 " style={{ border:'solid 1px #222', borderRadius:'2em' }}>
        <Link className="btn btn-md me-lg-3" style={{ border:'solid 1px #222' }}>All order</Link>
        <Link className='me-lg-3 text-dark btn' style={{ textDecoration:'none' }}>Drafts</Link>
        <Link className='me-lg-3 text-dark btn' style={{ textDecoration:'none' }}>Shipping</Link>
        <Link className='me-lg-3 text-dark btn' style={{ textDecoration:'none' }}>Complete</Link>
        <Link className='me-lg-3 text-dark btn' style={{ textDecoration:'none' }}>Cancelled</Link>
    </div>
</div>

<div className='row mt-4 pl-5'>

<RecentIvoice/>
</div>

</div>
 </>
)

};

export default Order;
