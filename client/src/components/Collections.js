import React from "react";
import { NavLink } from "react-router-dom";

const Collections = () => {
  return (
    <div className="collections">
      <header>
        <div className="NavBar">
          <NavLink to="/Home" exact>
            Home
          </NavLink>
        </div>
        <div>
          <h1>Collections</h1>
        </div>
      </header>
    </div>
  );
};

export default Collections;
