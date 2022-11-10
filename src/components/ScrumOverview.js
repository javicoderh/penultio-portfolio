import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function ScrumOverview() {

 return (

  <div>
   <div className="head">
    <h4 className="scrOvTit"> Scrum methodology</h4>
    <nav className="scrumNav">
     <NavLink to="/scrumov"><button className="ScrumNavLink">General | </button></NavLink>
     <NavLink to="/scrumov/history">
      <button className="ScrumNavLink">History | </button>
     </NavLink> 
     <NavLink to="/scrumov/structure"> 
      <button className="ScrumNavLink">Structure | </button>
     </NavLink> 
     <NavLink to="/scrumov/roles">  
     <button className="ScrumNavLink">Roles | </button>
     </NavLink>
     <button className="ScrumNavLink">Comments | </button>
     <button className="ScrumNavLink">Suscribe | </button>
    </nav>
    <Outlet/>
   </div>   
  </div>

 )
}

export default ScrumOverview