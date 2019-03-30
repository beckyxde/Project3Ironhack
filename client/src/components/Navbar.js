import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper white darken-3">
      <Link
        to="/Home"
        className="brand-logo"
        img
        scr="./images/logo_transparent.png"
        width="30"
        height="30"
        className="align-left"
        alt="Digital Digest Logo"
      />
      <div className="NavBar">
        <ul>
          <a href="/Collections">Collections</a>
          <a href="/">Logout</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
