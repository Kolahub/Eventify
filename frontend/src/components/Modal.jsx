import React from 'react';
import classes from './Modal.module.css';

function Modal({ show, onClose, onConfirm, message }) {
  if (!show) {
    return null;
  }

  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modal}>
        <p className={classes.message}>{message}</p>
        <div className={classes.actions}>
          <button onClick={onConfirm}>OK</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
