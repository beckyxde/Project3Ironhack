import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <Navbar bg="white" variant="white">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="img/NewsIcon.png"
          width="50px"
          height="100%"
          className="d-inline-block align-top"
        />
        {/* <h4>Digital Digest</h4> */}
      </Navbar.Brand>
      <div className="NavBar">
        <ul>
          <a href="/Home">Home</a>
          <a href="/Collections">Collections</a>
          <a href="/">Logout</a>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navbar2;
