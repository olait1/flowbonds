import React from "react";
import { Outlet } from "react-router-dom";
const Card = ({ title, description, image }) => {
    return (
        <div className="row container-fluid">
            <div className="col-md-12">
                
        <div className="row   ">
            <div className="col-md-4 align-items-center mt-5 py-3 shadow  bg-white mx-auto p-5">

            <Outlet/>
    
            </div>
        </div>
        
        </div>
        </div>
    );
}
export default Card;