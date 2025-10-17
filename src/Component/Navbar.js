import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
const Navbar = () => {
  return (

    <div className="nav">
      <div className="navbar">
        <div className="logo"><img src="./Images/logo.png"/></div>
      <Link className="linkk" to="/">Portfolio</Link>
      <Link className="linkk" to="/home">Home</Link>
      <Link className="linkk" to="/about">About</Link>
      <Link className="linkk" to="/skills">Skills</Link>
      <Link className="linkk" to="/contact">Contact</Link>
      <Link className="linkk" to="/projects">Projects</Link>
      
      
      
    
      </div>
    </div>
  );
};

export default Navbar;
