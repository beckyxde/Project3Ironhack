import React, { Component } from "react";
// import { MDBCol, MDBIcon } from "mdbreact";
import Search from "./Search";
import Card from "./Card";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { Redirect } from "react-router-dom";
// import {
//   CardGroup,
//   Card,
//   Row,
//   CardColumns,
//   ButtonGroup,
//   ButtonToolbar,
//   Button
// } from "react-bootstrap";
// // import onSubmit from "../components/Search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

      results: [],


      // redirect: false
    };
  }

  getInfo = (searchTerm) => {

    let url = `http://localhost:5000/api/stories`;
    if (searchTerm) url = `http://localhost:5000/api/stories/${searchTerm}`;
    axios.get(url).then(res => {
      this.setState({
        results: res.data

      });
    });
  };

  componentDidMount() {
    this.getInfo();
  }

  render() {

    return (
      <div className="home">

        <header>
          <div className="NavBar">
            <ul>
              <a href="/Collections">Collections</a>
              <br />
              <a href="/">Logout</a>
            </ul>
          </div>
        </header>

        <div>
          <Search onSearch={this.getInfo} />
        </div>

        <Card mirResult={this.state.results} />

        <div>

        </div>
        {/* <div className="card-group"> */}
        {/* <CardColumns className="col-lg-12">
          {this.state.results.map((result, i) => {
            console.log(result);
            return (
              <Card>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>{result.title}</Card.Text>
                <ButtonToolbar className="justify-content-between">
                  <button type="redirect">Like</button>
                  <button type="redirect">Open{this.url}</button>
                </ButtonToolbar>
              </Card>
            );
          })}
        </CardColumns> */}
        {/* <div className="card-group-local">
          {this.state.results.map((result, i) => {
            console.log(result);
            return (
              <div className="card-local" key={i}>
                <div className="card-title-local">
                  <h4>{result.title}</h4>
                </div>
                <br />
                <div className="card-text-local">
                  <p>{result.title}</p>
                </div>
                <div className="card-footer-local">
                  <button type="redirect">Like</button>
                  <button type="redirect">Open</button>
                </div>
              </div>
            );
          })}
        </div> */}
        {/* </div> */}
      </div>
    );
  }
}
export default Home;
