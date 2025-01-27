import React from "react";
import { Link } from "react-router-dom";
import ChangePasswordImg from "./../../assets/img/confirm_password.webp"; // Ensure this path is correct
const ChangePassword = () => {
    return <>
   <form className="p-2">
                  <img src={ChangePasswordImg} alt="" className="img-fluid" />
                  

  <div class="mb-2">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-block btn-dark w-100">Submit</button>

</form>    </>
    }
export default ChangePassword;