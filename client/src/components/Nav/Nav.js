import React from "react";
import "./Nav.css";
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}
const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand">
	      <GoogleLogin className="google"
		    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
		    buttonText="Login"
		    onSuccess={responseGoogle}
		    onFailure={responseGoogle}
		  />
        </div>
      </div>
    </div>
  </nav>

);

export default Nav;
