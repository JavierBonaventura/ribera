import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "../App.css";

const Family = () => {
  return (

    
        <div >
                <div class="flex justify-between items-center  ">
                  <div class="">
                  <Link to="/Prueba1">
                      <img src={logo} alt="" className="w-24 md:w-28" />
                    </Link>
                  </div>

                </div>
        </div>
   
 
  );
};

export default Family;
