import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CollectionFolder extends Component {
  render() {
    return (
      <div className="folder-group">
        {this.props.userCollections.map((collection, i) => {
          console.log("coleeeeeectionsdata", collection)
          return (
            <div>
              <div className="favouritesFolder">
                <Link to="InUserFolder">
                  <img className="newspaper-icon" src="img/folderfolderfolder.png" alt="I am a newspaper icon"></img>
                </Link>
                <div>Favourites</div>
              </div>



              <div className="favouritesFolder" key={i}>
                <Link to="InUserFolder"><img className="newspaper-icon" src="img/folderfolderfolder.png" alt="I am a newspaper icon"></img>
                </Link>
                <div>{collection.name}</div>
              </div>



              <div className="favouritesFolder">
                <img className="newspaper-icon" src="img/folderfolder.png" alt="I am a newspaper icon"></img>
                <div>+ Collection 😃</div>
              </div>
            </div>


          )
        })
        }
      </div>
    )
  };
};