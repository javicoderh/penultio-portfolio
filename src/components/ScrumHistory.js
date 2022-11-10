import React from "react";
import { Link } from "react-router-dom";

export default function ScrumHistory() {
 return (

  <div className="main">
   <Link to="/scrumov">
    <img className="leftArrow" src="https://www.svgheart.com/wp-content/uploads/2020/07/left-arrow-icon-free-svg-file.png" height="50"></img>
    <h6 className="lefth6">Prev</h6>
   </Link>
  <div className="Card"> 
  <h2>Scrum History</h2>
  <img className="scrumLogo" src='https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png' height="100"></img>
  <h4>
      Scrum methodology was codified in 1995 based on the agile concept reacting to an extremely fast world 
      <br></br>
      that requires quick changes from enterprises in order to add value to their customers dynamic needs
  </h4>
  </div>
  <Link to="/scrumov/history2">
   <img className="rightArrow" src="https://www.svgheart.com/wp-content/uploads/2020/07/left-arrow-icon-free-svg-file.png" height="50"></img>
   <h6 className="righth6">Next</h6>
  </Link>
 </div> 
 )
}

