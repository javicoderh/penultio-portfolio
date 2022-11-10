import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export const Galleries = function GalleriesLink() {
 return (

  
  <div className="sectionContainer">
    <Link to="/galleries">
   <button className='GalleriesLink'>
    <div className='headerContainer'>
     <img className="sectionImg" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Art-and-feminism.svg/816px-Art-and-feminism.svg.png'></img>
     <h1>Galleries</h1>       
    </div>
   </button>
   </Link>
  </div>
)}



export const DragDream = function DragDreamLogin() {
 return (

<div className="sectionContainer">
  <Link to="/dragdream">
 <button className='DragDreamLogin'>
  <div className='headerContainer'>
   <img className="sectionImg" src='https://freesvg.org/img/Tribal-Dragon-42.png' ></img>
   <h1>Dragon's dreaming</h1>       
  </div>
 </button>
 </Link>
</div>
 ) 
}

export const Scrum = function Scrum() {
 return (

 
  <div className="sectionContainer"> 
  <Link to="/scrumov">
   <button className='ScrumLogin'>
    <div className='headerContainer'>
     <img className="sectionImg" src='https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png'></img>
     <h1>Scrum</h1>       
    </div>
   </button>
   </Link>
  </div>
)}

export const IndexLinks = function indexComponents() {

return (

<div className="indexContainer">
<Scrum/>
<DragDream/>
<Galleries/>
<br></br>
<Logout/>
</div>
  

)}