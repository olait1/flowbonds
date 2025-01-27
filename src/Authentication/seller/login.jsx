import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const getData = (e) => {
        const datas = {
            ...user,
            [e.target.name]: e.target.value
        };

        setUser(datas);
    };

    const payload = (e) => {
        e.preventDefault();
        if (!user.email || !user.pwd) {
            setError("All fields are required");
            return;
        }
setError('');

console.log(user);

        alert("Login Successful")

    }
  
    return <>
   

                    <form className="p-3">
                    <p className="text-center h5 fw-bold  mx-1 ">
                    Welcome Back To FlowBonds
                    </p>
                    
                    <p className="text-center text-muted">Login your account</p>
  <div className="mb-3 mt-5">
    <p className="text-danger text-center">{error}</p>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="exampleInputEmail1" onChange={getData} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="pwd" id="exampleInputPassword1" onChange={getData}/>
  </div>
  <div className="mb-3 form-check d-flex justify-content-between">
    <div>
        <input 
    type="checkbox" 
    onChange={(e) => setUser({ ...user, [e.target.name]: e.target.checked })} 
    name="reminder" 
    className="form-check-input bg-dark" 
    id="exampleCheck1"
/>
<label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
    </div>
    <label className="form-check-label" htmlFor="exampleCheck1" >
        <Link className="text-dark" to='/auth/seller/password-reset' style={{ marginLeft: 'auto', textDecoration:'none' }}>forget password?</Link></label>
</div>
  <button type="submit" className="btn btn-block btn-dark w-100" onClick={payload}>Submit</button>
  <p className="text-center mt-3">
  Don't have an account? <Link to="/auth/seller/signup" className="text-dark" style={{ textDecoration:"none" }}>Sign Up</Link>
  </p>
</form>   
    </>
    }
export default Login;