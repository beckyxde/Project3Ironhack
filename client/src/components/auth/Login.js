import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    Axios.post("http://localhost:5000/api/login", {
      email,
      password
    }).then((response) => {
      console.log("logged in", response)
      this.props.history.push("/Home")

    })
      .catch(error => console.log(error));
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <input
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <button type="submit" name="submit">
            Login!
          </button>
        </form>
      </div>
    );
  }
}

export default Login;