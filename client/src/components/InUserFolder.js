import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class InUserFolder extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <p>
          Results inside the folder
          <br /> call from API by id
        </p>
        <Footer />
      </div>
    );
  }
}
