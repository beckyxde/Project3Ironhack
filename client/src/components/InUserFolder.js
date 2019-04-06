import React, { Component } from "react";
import Navbar2 from "./Navbar";

export default class InUserFolder extends Component {
  render() {
    return (
      <div className="inUserFolder">
        <Navbar2 />

        <h1>Saved Articles "(Woot woot)"</h1>
        <p>
          Results inside the folder 😃
        </p>
      </div>
    );
  }
}
