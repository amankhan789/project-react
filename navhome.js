import React from "react";
import { Link, NavLink } from "react-router-dom";
import Reactlogo from'../../assets/reactlogo.png';

const Navhome = () => {
  return (

    <nav class="nav_login">    
        <img  class="nav_log" src={Reactlogo}/>

        <Link to="/"   className="  btn btn-warning">Logout</Link>
    </nav>
    
  );
};

export default Navhome;
