import React, { Component } from "react";
import Axios from "axios";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: [],
      url: "",
      text: [],
      results: []
      // redirect: false
    };
  }

  saveArticle = event => {
    event.preventDefault();
    Axios.post(
      (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/api"
    );
  };

  // openArticleTab() {
  //   let url = "www.google.com";
  //   // let url = this.state.results.map((result, i) => { return url = result.url })
  //   window.open(url, "_blank");
  // }

  render() {
    // console.log(this.state.results)
    return (
      <div className="card-group-local">
        {this.props.mirResult.map((result, i) => {
          /* console.dir(result.title); */

          return result !== null ? (
            <div className="card-local" key={i}>
              <div className="card-title-local">
                <h4>{result.title}</h4>
              </div>
              <span className="card-footer-local">
                <DropdownButton id="dropdown-basic-button" title="Like">
                  <Dropdown.Item
                    onClick={this.saveArticle /*.collections.favorites*/}
                  >
                    Favorites
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={this.saveArticle /*.collections.politics*/}
                  >
                    Save For Later
                  </Dropdown.Item>
                </DropdownButton>
                <button
                  // target="redirect"
                  // onClick={this.openArticleTab}
                  onClick={() => {
                    window.open(result.url, "_blank");
                  }}
                >
                  Go To
                </button>
              </span>
            </div>
          ) : null;
        })}
      </div>
    );
  }
}
