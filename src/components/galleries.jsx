import React from "react";
import { Link } from "react-router-dom";

export const GalleriesIndex = () => {

return (

<div className="gallerIndexContainer"> 
<h3 className="gallTit">Galleries</h3>

  <div className="gallery1">
   <Link to="/lightbox">
    <img className="galleryLinkImg" src="https://onecms-res.cloudinary.com/image/upload/s--oxzXFyR7--/f_auto%2Cq_auto/v1/8days-migration/gallery-photo-interior-2-data.jpg?itok=I8TGoX7Y" alt=""/>
    <h5 className="galleryTit">Lightbox Gallery</h5>
   </Link>
  </div>
 
 
  <div className="gallery2">
   <Link to="/fibonacci">
    <img className="galleryLinkImg" src="https://i.pinimg.com/originals/a0/42/5b/a0425b4d3a77461b74ea604295cedb65.png" alt=""/>
    <h5 className="galleryTit">Fibonacci Gallery</h5>
   </Link>
  </div>
 
 
  <div className="gallery3">
   <Link to="/radial">
    <img className="galleryLinkImg" src="https://s3.envato.com/files/bd4a514a-7a88-4aa8-b6c6-a78349f21a17/inline_image_preview.jpg" alt=""/>
    <h5 className="galleryTit">Radial Gallery</h5>
   </Link>
  </div>
 
 
  <div className="gallery4">
   <Link to="/diagonal">
    <img className="galleryLinkImg" src="https://wallpapercave.com/wp/wp4672641.jpg" alt=""/>
    <h5 className="galleryTit">Diagonal Gallery</h5>
   </Link>
  </div>
 
 
  <div className="gallery5">
   <Link to="sliders">
    <img className="galleryLinkImg" src="https://i0.wp.com/www.csscodelab.com/wp-content/uploads/2020/04/js-carousel-slider-card-design.png?fit=1068%2C697&ssl=1" alt=""/>
    <h5 className="galleryTit">Sliders</h5>
   </Link>  
  </div>
 
 <Link className="gridHome" to="/index"><button className="homeButton "><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>Home</h5></button></Link>
</div>
 
 


)}