import React from 'react';
import notFound  from "./../../assets/img/404.jpg";
import { Link } from "react-router-dom";
const Not_Found = () => {
  return (
<div className="div" style={{ backgroundImage: `url(${notFound})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw',
 width: '100vw',height: '100vh',  }}>
<Link to='/' className='text-dark'>click here to go back</Link>
</div>
  )
}
export default Not_Found;