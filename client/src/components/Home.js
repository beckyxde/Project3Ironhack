import React, { Component } from "react";
// import { MDBCol, MDBIcon } from "mdbreact";
import Search from "./Search";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
// import onSubmit from "../components/Search";

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

  getInfo = searchTerm => {
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
            <NavLink to="/Collections" exact>
              Collections
            </NavLink>
          </div>
        </header>

        <div>
          <Search onSearch={this.getInfo} />
        </div>

        <div className="box">
          <CardGroup>
            {this.state.results.map((result, i) => {
              return (
                <div className="card" key={i}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Card.Title>{result.title}</Card.Title>
                        <br />
                        <Card.Text>{this.text}</Card.Text>
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted" />
                    </Card.Footer>
                  </Card>
                </div>
              );
            })}
          </CardGroup>
        </div>
      </div>
    );
  }
}
export default Home;
