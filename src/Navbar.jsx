import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";


const Navbar = () => {
    return(
  <>
  <div className="container-fluid-bg">
    <div className="row">
      <div className="col-10 mx-auto">
        
    
         <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <NavLink className="navbar-brand" to="/">Technology GYan</NavLink>
                
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
               < NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
             </li>
             <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/services">Services</NavLink>
             </li>

             <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/about">About </NavLink>
             </li>

             <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
             </li>
               
             
          </ul>
        
      </div>
    </nav>
    </div>

    </div>

  </div>
   </>
    );
};

export default Navbar;