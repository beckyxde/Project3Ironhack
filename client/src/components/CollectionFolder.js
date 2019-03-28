import React, { Component } from 'react';

export default class CollectionFolder extends Component {
  render() {
    return (
      <div className="folder-group">
        <div className="single-folder">
          <div className="folder-icon"></div>
          <p>I am a Folder</p>
        </div>
      </div>
    )
    // <div className="folderGroup">
    //         {this.state.collections.map((collection, i) => {
    //           console.log("coleeeeeectionsdata", collection)

    //           return (
    //             <div className="singleFolder" key={i}>
    //               {collection.name}
    //             </div>
    //           )
    //         })}
    //         ;
    //         </div> {/* this is like a button */}
    //     </div>
  }
};