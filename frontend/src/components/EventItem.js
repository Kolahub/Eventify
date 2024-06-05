import React, { useState } from 'react';
import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";
import Modal from './Modal';

function EventItem({ event }) {
  const [showModal, setShowModal] = useState(false);
  const submit = useSubmit();

  function startDeleteHandler() {
    setShowModal(true);
  }

  function handleConfirm() {
    setShowModal(false);
    submit(null, { method: 'delete' });
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
      <Modal 
        show={showModal} 
        onClose={handleClose} 
        onConfirm={handleConfirm} 
        message="Are you sure you want to delete this event?" 
      />
    </article>
  );
}

export default EventItem;
