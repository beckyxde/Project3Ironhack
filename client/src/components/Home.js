import React, { Component } from "react";
// import { MDBCol, MDBIcon } from "mdbreact";
import Search from "./Search";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import { CardGroup, Card } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: [],
      results: []
      // redirect: false
    };
  }

  getInfo = () => {
    axios.get("http://localhost:5000/api/stories").then(res => {
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
            <NavLink to="/Collections" exact>
              Collections
            </NavLink>
          </div>
          <div>
            <Search />
          </div>
        </header>
        <CardGroup>
          {this.state.results.map(result => {
            return (
              <div class="card">
                <Card>
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <br />
                    <Card.Text>{this.text}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted" />
                  </Card.Footer>
                </Card>
              </div>
            );
          })}

          {/* <Card>
            <Card.Body>
              <Card.Title>{this.title}</Card.Title>
              <Card.Text>{this.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>{this.title}</Card.Title>
              <Card.Text>{this.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> */}
        </CardGroup>
      </div>
    );
  }
}
export default Home;
