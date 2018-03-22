
import React from 'react';
import Modal from 'react-modal';

const TeamModal = (props) => {

  return (
    <Modal
      ariaHideApp={false}
      isOpen={!!props.state}
      onRequestClose={props.handleClearSelected}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      {props.state && <div>
          <h3 className="modal__title">{props.state.name}</h3>
          <p className="modal__sub">{props.state.role}</p>
          <p className="modal__body">{props.state.description}</p>
          <button className="cta-button modal-button" onClick={props.handleClearSelected}>Done</button>
        </div>}
    </Modal>
  );
}

export default TeamModal;