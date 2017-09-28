import React from "react";

const buttonsInstance  = ({ type, className, children, onClick }) => (
	<div className = "ButtonGroup">
	    <div className = "DropdownButton" id="dropdown-btn-menu" bsStyle="success" title="Dropdown">
	      <div className = "MenuItem" key="1">Dropdown link</div>
      	  <div className = "MenuItem" key="2">Dropdown link</div>
    	  <div className = "Button" bsStyle="info">Middle</div>
    	  <div className = "Button" bsStyle="info">Right</div>
    	</div>
  	</div>
);

export default buttonInstance;