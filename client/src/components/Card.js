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
      console.log(res);

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
      this.state.results.map((result, i) => {
        console.log(result);
        return (
          <div>

            {/* <div className="row">
          <div className="example-1 card">
            <div className="wrapper">
              <div className="data">
                <div className="content">
                  <span className="author">Jane Doe</span>
                  <h1 className="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>
                  <p className="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
                  <label for="show-menu" className="menu-button"><span></span></label>
                </div>
                <input type="checkbox" id="show-menu" />
                <ul className="menu-content">
                  <li>
                    <a href="#" className="fa fa-bookmark-o"></a>
                  </li>
                  <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

            <div className="card-group-local">
              {/* {this.state.results.map((result, i) => {
            console.log(result);

            return (
              <div className="card-local" key={i}>
                <div className="card-title-local">
                  <h4>{result.title}Title</h4>
                </div>
                <br />
                <div className="card-text-local">
                  <p>{result.url}URL</p>
                </div>
                <div className="card-footer-local">
                  <button type="redirect">Like</button>
                </div>
              </div>
            );
          })} */}
              <div className="card-local" key="blah">
                <div className="card-title-local">
                  <h4>Title{result.title}</h4>
                </div>
                <br />
                <div className="card-text-local">
                  <p>URL</p>
                </div>
                <div className="card-footer-local">
                  <button type="redirect">Like</button>
                  {/* <button type="redirect">Open</button> */}
                </div>
              </div>
            </div>
          </div>
        )
      }));
  }
};