import React from "react";
import "./Nav.css";

const responseGoogle = (response) => {
  console.log(response);
}
const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
      <div className="navbar-header">
        <div className="navbar-brand left">
	      <a href="/"><h4 className="postPet">Adoptable</h4></a>
        </div>
      </div>
  </nav>

);

export default Nav;