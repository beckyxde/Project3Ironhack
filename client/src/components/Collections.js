import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

export default class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []  // not sure how to reference user in DB
    }
  }

  componentDidMount() {

    Axios.get("http://localhost:5000/user/collections")
      .then(response => {
        // console.log("response", response)
        this.setState({
          collections: response.data
        });
      })
      .catch(error => console.log(error));
  };


  render() {
    return (
      <div className="collections">
        <header>
          <div className="NavBar">
            <NavLink to="/Home" exact>
              Home
          </NavLink>
          </div>
          <div>
            <h1>Collections</h1>
            <div className="folderGroup">
              {this.state.collections.map((collection, i) => {
                console.log("coleeeeeectionsdata", collection)

                return (
                  <div className="singleFolder" key={i}>
                    {collection.name}
                  </div>
                )
              })}
              ;
            </div> {/* this is like a button */}
          </div>
        </header>
      </div>
    );
  };
};