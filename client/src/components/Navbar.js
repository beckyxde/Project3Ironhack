import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <Navbar bg="white" variant="white">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="img/NewsIcon.png"
          width="80px"
          height="100%"
          className="d-inline-block align-top"
          href="/Home"
        />
        {/* <h4>Digital Digest</h4> */}
      </Navbar.Brand>
      <div className="NavBar">
        <ul>
          <Link to="/Home">Home</Link>
          <Link to="/Collections">Collections</Link>
          <Link to="/">Logout</Link>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navbar2;
