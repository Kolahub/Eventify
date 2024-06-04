import React from 'react'
import EventForm from '../components/EventForm'
import { useDispatch } from 'react-redux';
import { addEvents } from '../store/eventsActions.js';
import { useNavigate } from 'react-router-dom';

function NewEventPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  function handleSubmit (e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const eventData = Object.fromEntries(fd.entries())
    dispatch(addEvents(eventData, navigate))
    // console.log(eventData);
    }
  return (
    <>
    <EventForm method={'POST'} event={handleSubmit} value={{}}/>
    </>
  )
}

export default NewEventPage