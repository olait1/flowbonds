import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const navigate =useNavigate();
  const getData = (e) => {
    const datas = {
        ...user,
        [e.target.name]: e.target.value
    };

    setUser(datas);
};


const payload = (e) => {
  e.preventDefault();
  // if (!user.email || !user.pwd || !user.cpwd) {
  //     setError("All fields are required");
  //     return;
  // }
  alert("Login Successful")


}


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
    <input type="email" name="name"  onChange={getData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="pwd" onChange={getData} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" name="cpwd" onChange={getData} className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-block btn-dark w-100" onClick={payload}>Submit</button>
  <p className="text-center mt-3">
 Already have an account? <Link to="/auth/seller" className="text-dark" style={{ textDecoration:"none" }}>Login</Link>
  </p>
</form>    </>
    }
export default SignUp;