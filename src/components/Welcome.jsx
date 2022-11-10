import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "./Logout";
import { Link } from "react-router-dom";

export const UserWelcome = () => {

const { user, isAuthenticated, isLoading } = useAuth0();

if (isLoading) {

return(

  <div>
    Loading...
  </div>
)}

return (

isAuthenticated && (

<div className="mainUserWelcome">
  <h1 className="greetings">Welcome to my briefcase!</h1>
  <h3 className="greetingName">{user.name}</h3>
  <div className="loginCover">
    <Link to="/index">
      <button className="briefCaseEnter">
        <div className="bButton">
          <img src="https://findicons.com/files/icons/1263/hieroglyphica_vol_2/128/eye_of_horus_embossed.png" height="65" alt="bcButton">
          </img>
          <h5 cal className="briefButton">enter briefcase</h5>
        </div>
      </button>
    </Link>    
  </div>
  
</div>
)

 )}