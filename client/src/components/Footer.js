import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-body">
        <div className="footer-contents">
          <p className="about">
            About DigiDigest:
            <br />
            Yum.
          </p>
          <p className="imprint">
            <span className="imprint-title">Imprint:</span>
            <br />
            DigiDigest GmbH
            <br />
            In This Room 101
            <br />
            4444 Paradise City
            <br />
            Don't contact me
          </p>
        </div>
      </div>
    );
  }
}
