import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormSubmit = (event) => {

    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    Axios.post('http://localhost:/api/signup', { username: username, password: password }).then((response) => {
      this.setState({
        username: "",
        password: "",
      })
    })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form>

        </form>
      </div>
    )
  }

}

export default Signup;
