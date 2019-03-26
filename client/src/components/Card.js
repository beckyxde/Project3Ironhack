import React, { Component } from 'react';
import Axios from 'axios';

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

  getInfo = searchTerm => {
    let url = `http://localhost:5000/api/stories`;
    if (searchTerm) url = `http://localhost:5000/api/stories/${searchTerm}`;
    Axios.get(url).then(res => {
      console.log("line 21", res);

      this.setState({
        results: res.data
      });
    });
  };

  componentDidMount() {
    this.getInfo();
    /* console.log(this.state.results) */
  }


  render() {
    console.log(this.state.results)
    return (
      <div className="card-group-local">
        {this.state.results.map((result, i) => {

          /* console.dir(result.title); */

          return result !== null ? (
            <div className="card-local" key={i}>
              <div className="card-title-local">
                <h4>{result.title}</h4>
              </div>
              <br />
              <div className="card-text-local">
                <p>{result.url}URL</p>
              </div>
              <div className="card-footer-local">
                <button type="redirect">Like</button>
              </div>
            </div>
          ) : null;
        })};
      </div>
    )
  }
};