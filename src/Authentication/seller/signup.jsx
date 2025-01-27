import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return <>
   <form className="p-3">
                    <p className="text-center h5 fw-bold mx-1 ">
                    Welcome Back To FlowBonds
                    </p>
                    <p className="text-center text-muted">Create an account</p>
                  <div className="text-center mt-4">
                    <span className="p-2 mx-3 bg-dark text-light" style={{ width:"50px", height:"50px", borderStyle:"solid", borderWidth:'1px', borderRadius:"50%" }}>
                        1
                    </span>
                    <span className="p-2 mx-3" style={{ width:"50px", height:"50px", borderStyle:"solid", borderWidth:'1px', borderRadius:"50%" }}>
                        2
                    </span>
                    <span className="p-2 mx-3" style={{ width:"50px", height:"50px", borderStyle:"solid", borderWidth:'1px', borderRadius:"50%" }}>
                        3
                    </span>
                  </div>
  <div class="mb-3 mt-5">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-block btn-dark w-100">Submit</button>
  <p className="text-center mt-3">
 Already have an account? <Link to="/auth/seller" className="text-dark" style={{ textDecoration:"none" }}>Login</Link>
  </p>
</form>    </>
    }
export default SignUp;