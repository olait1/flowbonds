import React, { useState } from "react";

const Toggler =()=>{
    const [toggleVal, setToggleVal] = useState(false);
const toggle =(e)=>{
e.preventDefault();
setToggleVal(!toggleVal);

alert();
}
    return(
    <button className="me-1 fw-bold " type="button" style={{ borderColor:"#ccc" }} >
               <i className="fas fa-bars text-muted p-2 " style={{fontSize: "24px", cursor: "pointer"}}></i>

    </button>
              );
}
export default Toggler;