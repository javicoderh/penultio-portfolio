import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserWelcome } from "./Welcome";
import { Link } from "react-router-dom";

export const LoginButton = function LoginButton() {

 const { loginWithRedirect } = useAuth0();

 return(
<div className="loginContainer"> 
 <button className="login" onClick={() => loginWithRedirect()}>login</button>
 <UserWelcome/>
</div>


 )}