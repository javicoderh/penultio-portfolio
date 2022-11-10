import React from "react";
import { Link } from "react-router-dom";


export const Roles = function ScrumRoles() {

 return(

<div className="mainRoles">
<div className="scrumStructureContainer">
  <div className="productOwner">
    <Link to="/scrumov/productowner">
      <img className="productOwnerImg" height="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Royal_Crown_of_Jordan.svg/2560px-Royal_Crown_of_Jordan.svg.png" alt="" />
      <h5>Product owner</h5>
    </Link>
    </div>
    <div className="masterProgramers">
      <Link to="/scrumov/scrummaster">
        <div className="scrumMaster">      
          <img className="scrumMasterImg" src="http://cdn.onlinewebfonts.com/svg/img_193199.png" height="65" alt=""></img>
          <h5>Scrum master</h5>        
        </div>     
      </Link>
    <div className="programmers">
    <Link to="/scrumov/programmers">
        <div className="programmersImg">
          <img className="programerImg" src="https://media.istockphoto.com/vectors/working-at-home-vector-flat-style-illustration-online-career-space-vector-id1241710727?b=1&k=20&m=1241710727&s=170667a&w=0&h=TH-n9JrD1BFzemwari9VgBtx6dVmNnm3KrYhLEtx0B4=" height="100" alt=""></img>
          <img className="programerImg" src="https://static.vecteezy.com/system/resources/thumbnails/000/229/543/small/young-indian-woman-as-female-developer-profession.jpg" height="100" alt=""></img>
          <img className="programerImg" src="https://contentstatic.techgig.com/photo/msid-80100511/4-Must-have-software-skills-for-application-developers.jpg" height="100" alt=""></img>
        </div>
          <h5>programers</h5>
    </Link>
    </div>
    </div>
  </div>
</div>

 )};