import React from "react";
import { Link } from "react-router-dom"

export const ScrumHistory2 = function ScrumHistory() {
 return (

  <div className="main">
   <Link to="/scrumov/history">
    <img className="leftArrow" src="https://www.svgheart.com/wp-content/uploads/2020/07/left-arrow-icon-free-svg-file.png" height="50"></img>
    <h6 className="lefth6">Prev</h6>
   </Link>
  <div className="Card"> 
  <h2>Scrum History</h2>
  <img className="scrumLogo" src='https://cdn-icons-png.flaticon.com/128/1534/1534435.png' height="100"></img>
  <h4>
      Jeff Sutherland and Ken Schwaber conceived the seed of scrum in 1990 and since then they started working   
      <br></br>
      on this methodology, the name Scrum comes from a rugby formation that implies a high level of cohesion just like the cohesion a programing team needs 
  </h4>
  </div>
  <Link to="/scrumov/history3">
   <img className="rightArrow" src="https://www.svgheart.com/wp-content/uploads/2020/07/left-arrow-icon-free-svg-file.png" height="50"></img>
   <h6 className="righth6">Next</h6>
  </Link>
 </div> 
 )
}

export const ScrumHistory3 = function ScrumHistory() {
 return (

  <div className="main">
   <Link to="/scrumov/history2">
    <img className="leftArrow" src="https://www.svgheart.com/wp-content/uploads/2020/07/left-arrow-icon-free-svg-file.png" height="50"></img>
    <h6 className="lefth6">Prev</h6>
   </Link>
  <div className="Card"> 
  <h2>Scrum History</h2>
  <img className="scrumLogo" src='https://www.seerene.com/hubfs/agile%20SOFTWARE%20DEVELOPMENT.svg' height="100"></img>
  <h4>
      At the begining, agile concept inspired the creators of Scrum methodology, then the redaction of the scrum methodology   
      <br></br>
      in 1995 inspired the creation of the agile manifest on 2001 bringing a material body to the new paradigm rising in the teamwork 
      <br></br>
      improvement area.

  </h4>
  </div>
  <Link to="/scrumov/history4">
   <img className="rightArrow" src="https://www.svgheart.com/wp-content/uploads/2020/07/left-arrow-icon-free-svg-file.png" height="50"></img>
   <h6 className="righth6">Next</h6>
  </Link>
 </div> 
 )
}