import React from "react";
import "./Nav.css";
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}
const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
      <div className="navbar-header">
        <div className="navbar-brand left">
	      <GoogleLogin className="google"
		    clientId="202041517557-vaub2sonoel9t658dk81dj0hh5qj9lru.apps.googleusercontent.com"
		    buttonText="LOGIN"
		    onSuccess={responseGoogle}
		    onFailure={responseGoogle}
		  />
        </div>
      </div>
      <div className="navbar-brand right">
        <a href="/adoptionpage"><h4 className="postPet">Post a Pet</h4></a>
      </div>
  </nav>

);

export default Nav;
