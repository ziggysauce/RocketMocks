import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import works from '../../../api/Works';

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
              <Link 
                key={index} 
                className="selected-work"
                to={{
                  pathname: `works/${work.url}`,
                  state: { work: work }
                }}
              >
                <img src={work.img} alt="work example filler"/>
                <p>{work.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Works;