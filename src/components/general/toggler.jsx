import React, { useState } from "react";
import { useTogglerContext } from "../../contextProvider/toggler";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "./../../redux/toggler";
const Toggler =()=>{
  const value = useSelector((state) => state.global.value);
  const dispatch = useDispatch();
  



    return(
    <button className="me-1 fw-bold btn btn-default " type="button" onClick={()=>dispatch(setValue(!value))} >
               <i className="fas fa-bars text-muted  " style={{fontSize: "24px", cursor: "pointer"}}></i>

    </button>
              );
}
export default Toggler;