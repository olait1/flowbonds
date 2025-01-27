import React, { useState } from "react";
import ForgetPasswordImg from "./../../assets/img/forgot-password.avif"; // Ensure this path is correct

const ForgetPassword = () => {
const payload = (e) => {
    
}
    
    return ( <>
   

                    <form className="p-3">
                    {/* <p className="text-center h5 fw-bold  mx-1 ">
                    Welcome Back To FlowBonds
                    </p> */}
{/*                     
                    <p className="text-center text-muted">Reset Password</p> */}
                    <img src={ForgetPasswordImg} alt="" srcset="" className="img-fluid"/>
  <div className="mb-3 mt-2">

    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-block btn-dark w-100" onClick={payload}>Submit</button>
 
</form>   
    </>
    )
    }
export default ForgetPassword;