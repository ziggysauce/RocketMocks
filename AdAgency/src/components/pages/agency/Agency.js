import React, { Component } from 'react';
import teammates from '../../../api/Teammates';
import TeamModal from './TeamModal';


class Agency extends Component {
  state = {
    teammates: teammates.teammates,
    selected: undefined
  }

  handleClearSelected = () => {
    this.setState(() => ({ selected: undefined }));
  }

  render() {
    const { teammates } = this.state;

    return (
      <div className="page-wrapper">
        <div className="agency--hero">
          <h2>Agency</h2>
        </div>
        <h2 className="meet-the-team">Meet Our Team</h2>
        <div className="agency-team--wrapper">
          {teammates.map((teammate, index) => {
            return (
              <div 
                key={index} 
                className="agency-teammate" 
                onClick={() => this.setState({ selected: teammate })}
              >
                <img src={teammate.img} alt="teammate filler"/>
                <p>{teammate.name}</p>
              </div>
            );
          })}
        </div>
        <TeamModal 
          state={this.state.selected}
          handleClearSelected={this.handleClearSelected}
        />
        <div className="agency--join">
          <h2>Interested In Joining?</h2>
        </div>
      </div>
    );
  }
}

export default Agency;

