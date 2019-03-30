import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { NavLink } from "react-router-dom";
// import axios from "axios";

import LandingPage from "./components/auth/LandingPage";
import Home from "./components/Home";
import Collections from "./components/Collections";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Collections" exact component={Collections} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
