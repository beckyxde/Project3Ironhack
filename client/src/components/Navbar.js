import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper white darken-3">
      <Link to="/Home" className="brand-logo" />
      <img
        className="logo"
        src="../images/logo_transparent.png"
        alt="meaningful text"
      />
      <div className="NavBar">
        <ul>
          <a href="/Home">Home</a>
          <a href="/Collections">Collections</a>
          <a href="/">Logout</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
