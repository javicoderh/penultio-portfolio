import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import VisualDiv from "./visualDiv";



export default function StickyNav() {

 return (
  <div>
  <div>   
   <nav className="stickyNav">     
    <NavLink className="navLink" to="/">Home | </NavLink>      
    <NavLink className="navLink" to="/devSkills">DevSkills | </NavLink>      
    <NavLink className="navLink" to="/about">About me | </NavLink>     
    <NavLink className="navLink" to="/projects">Projects | </NavLink>      
    <NavLink className="navLink" to="/contact">Contact | </NavLink>   
   </nav>          
  </div>
  <Outlet/>
  </div>
  
  
 )
}

