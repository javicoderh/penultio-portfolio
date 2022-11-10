import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function DevSkillsOverview() {

 return (

 <div className="skillsContainer">
  <div className="skillsVisual">   
   <Link to="/devSkills/html">
    <div className="skillsItem">
     <img className="skillImg" src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png?w=360" height="70" alt="html"></img>
     <h6 className="skillName">HTML</h6>
    </div>
    </Link>
    <Link to="/devSkills/css">  
   <div className="skillsItem">
    <img className="skillImg" src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" height="70" alt="css"></img>
    <h6 className="skillName">CSS</h6>
   </div>
   </Link> 
   <Link to="/devSkills/sass">
   <div className="skillsItem">
    <img className="skillImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" height="70" alt="sass"></img>
    <h6 className="skillName">SASS</h6>
   </div>
   </Link>
   <Link to="/devSkills/js">
   <div className="skillsItem">
    <img className="skillImg" src="https://cdn.cdnlogo.com/logos/j/69/javascript.svg" height="70" alt="js"></img>
    <h6 className="skillName">JavaScript</h6>
   </div>
   </Link>
   <Link to="/devSkills/react">
   <div className="skillsItem">
    <img className="skillImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="70" alt="react"></img>
    <h6 className="skillName">React</h6>
   </div>
   </Link>
   <Link to="/devSkills/figma">
   <div className="skillsItem">
    <img className="skillImg" src="https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb.png" height="70" alt="figma"></img>
    <h6 className="skillName">Figma</h6>   
   </div>
   </Link>   
  </div>
  <h5 className="instructions">press icons for details</h5>
  <Outlet/>
 </div> 
 )
}

export default DevSkillsOverview