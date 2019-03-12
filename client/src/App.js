import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import axios from "axios";

import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Collections from "./components/Collections";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <NavLink to="/" exact>
            Signup
          </NavLink>
          <NavLink to="/Home" exact>
            Home
          </NavLink>
          <NavLink to="/Collections" exact>
            Collections
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Signup} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Collections" exact component={Collections} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
