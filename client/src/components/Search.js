import React, { Component } from "react";
// import axios from "axios";
// import Suggestions from "../components/Suggestions";
// import Home from "../components/Home";
// import getInfo from "../components/Home";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleForm = e => {
    e.preventDefault();

    console.log("form handled");

    this.props.onSearch(this.state.searchTerm);
  };

  // onClick = e => {
  //   e.preventDefault();
  //   this.props.onSearch(e.target.value);
  // };

  handleInputChange = e => {

    this.setState({
      searchTerm: e.target.value
    });
    // this.setState(
    //   {
    //     query: this.search.value
    //   },
    //   () => {
    //     if (this.state.query && this.state.query.length > 1) {
    //       // if (this.state.query.length % 2 === 0) {
    //       //   this.getInfo();
    //       // }
    //     }
    //   }
    // );
  };

  render() {
    console.log("this.props", this.props)
    // console.log(this.state.results);
    return (
      <form
        onSubmit={this.handleForm}
        // onSubmit={this.handleForm}
        action=""
        autoComplete="off"
        className="form-horizontal"
        method="post"
        acceptCharset="utf-8"
        width="300px"
        height="350px"
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          {/* <Suggestions results={this.state.results} /> */}
          <span className="input-group-btn">
            <button type="submit" className="btn btn-search">
              Search
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default Search;
