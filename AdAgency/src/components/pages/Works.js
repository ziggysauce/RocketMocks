import React, { Component } from 'react';
import works from '../../api/Works';

class Works extends Component {
  state = {
    works: works.works,
  }

  render() {
    return (
      <div className="page-wrapper">
        <h1>Works Page</h1>
        <div className="selected-works--wrapper">
          {this.state.works.map((work, index) => {
            return (
              <div 
                key={index} 
                className="selected-work" 
              >
                <img src={work.img} alt="work example filler"/>
                <p>{work.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Works;