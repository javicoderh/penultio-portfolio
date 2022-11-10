import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";

function ScrumIndex() {
 return (

<div className="orbitContainer">
 <div className='orbitButton1'>
    <img className='orbitImg' src='https://www.seerene.com/hubfs/agile%20SOFTWARE%20DEVELOPMENT.svg' height="80" alt=''></img>
    <h3 className='orbitH3'>Agile Concept</h3>
   </div>
   <Link to="/scrumov">
   <div className='orbitButton2'>
    <img className='orbitImg' src='https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png' height="80" alt=''></img>
    <h3 className='orbitH3'>Scrum Insight</h3>
   </div>
   </Link>
   <div className='orbitButton3'>
    <img className='orbitImg' src='https://svgsilh.com/svg_v2/2069837.svg' height="80" alt=''></img>
    <h3 className='orbitH3'>Scrum Filosophy</h3>
   </div>
  <div className='centralOrbit'>   
  <button className='centralCore'></button>       
</div>
<div className="scrumIndexHome"><Link className="gridHome" to="/index"><button className="homeButton "><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>back</h5></button></Link></div>

</div>


        )
}

export default ScrumIndex