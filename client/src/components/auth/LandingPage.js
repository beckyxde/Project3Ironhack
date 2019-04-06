import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
// import Footer from "./Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="signupLogin">
          <div className="auth-body">

            <Signup history={this.props.history} />

            <Login history={this.props.history} />

          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
