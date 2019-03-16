import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Axios from "axios";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;

    Axios.post("http://localhost:5000/api/signup", {
      email, password, name
    })
      .then(response => {
        this.setState({
          name: "",
          email: "",
          password: ""
        });
        this.props.history.push("/Home")
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
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
          <button type="submit" name="submit" >
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
