import React, { useEffect } from "react";
import EventsList from "../components/EventsList";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../store/eventsActions";
import { Link } from 'react-router-dom'

function EventsPage() {
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.eventData);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return <>
  <Link to='new' relative='path'>Add New Event</Link>
  <EventsList events={eventsData} />
  </>;
}

export default EventsPage;
