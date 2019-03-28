import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

<header>
  <div className="NavBar" expand="md">
    <NavLink to="/Home" exact>
      Home
    </NavLink>
    <NavLink to="/" exact>
      Logout
    </NavLink>
    <h2>Collections</h2>
  </div>
</header>;
