import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import logo from "./assets/time.png";

const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="nav-container"> 
          <div className='nav-logo'>
          <img alt="waitfreeDMV's logo" src={logo} width="50" height="50"/>
          </div>
          <ul className='nav-menu'>
              <NavLink to='/'
                className='nav-links'>
                Home
              </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};
  
export default Navbar;