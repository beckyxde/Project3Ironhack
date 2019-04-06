import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "../src/components/Footer";
// import { NavLink } from "react-router-dom";
// import axios from "axios";

import LandingPage from "./components/auth/LandingPage";
import Home from "./components/Home";
import Collections from "./components/Collections";
import InUserFolder from "./components/InUserFolder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Collections" exact component={Collections} />
            <Route path="/InUserFolder" exact component={InUserFolder} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
