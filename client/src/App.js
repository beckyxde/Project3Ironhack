import React, { Component } from "react";
import "./App.css";
import { Switch, Router } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Signup from "./components/auth/Signup";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    //  this.state = {
    //   data: data
    // };
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
