import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleFormSubmit = (event) => {

    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;

    Axios.post('http://localhost:5000/api/signup', { name: name, email: email, password: password }).then((response) => {
      this.setState({
        name: "",
        email: "",
        password: ""
      })
    })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={this.state.name} onChange={e => this.handleChange(e)} ></input>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChange(e)} ></input>
          <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} ></input>
          <button type="submit" name="submit">Submit!</button>
        </form>
      </div>
    )
  }

}

export default Signup;
