import React, { Component } from "react";
import axios from "axios";
import Suggestions from "../components/Suggestions";

const { API_KEY } = process.env;
const API_URL = `https://hacker-news.firebaseio.com/v0/newstories.json`;

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    axios
      .get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          // if (this.state.query.length % 2 === 0) {
          //   this.getInfo();
          // }
        }
      }
    );
  };

  render() {
    return (
      <form
        action=""
        autocomplete="off"
        class="form-horizontal"
        method="post"
        accept-charset="utf-8"
        width="500px"
        height="350px"
      >
        <div class="input-group">
          <input
            type="text"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
          <span class="input-group-btn">
            <button
              type="submit"
              class="btn btn-search"
              onClick={this.state.results}
            >
              Search
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default Search;
