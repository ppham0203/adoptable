import React from "react";
import "./Nav.css";
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}  
const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
      <div className="navbar-brand">
        <a href="/signup"><h4 className="postPet">Sign up</h4></a>
      </div>
      <div className="navbar-header navbar-brand">
	      <GoogleLogin className="google"
		    clientId="202041517557-vaub2sonoel9t658dk81dj0hh5qj9lru.apps.googleusercontent.com"
		    buttonText="LOGIN"
		    onSuccess={responseGoogle}
		    onFailure={responseGoogle}
		  />
      </div>
      <a className="title" href="/">
        <h2 className="header">Adoptable</h2>
      </a>
      <a href="/adoptionpage">
        <div className="navbar-brand navbar-right">
          <a href="/adoptionpage"><h4 className="postPet rightSide">Post a Pet</h4></a>
        </div>
      </a>
      <a href="/aboutUs">
        <div className="navbar-brand navbar-right">
          <a href="/aboutUs"><h4 className="postPet rightSide">About Us</h4></a>
        </div>
      </a>
  </nav>

);

export default Nav;
