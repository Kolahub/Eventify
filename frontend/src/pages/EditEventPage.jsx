import React from "react";
import EventForm from "../components/EventForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editEvents } from "../store/eventsActions";

function EditEventPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const eventData = useSelector((state) => state.eventData);

  const eventToBeEdited = eventData.find((el) => el.id === params.eventId);
  // console.log(eventToBeEdited, params.eventId);
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const eventData = Object.fromEntries(fd.entries());
    dispatch(editEvents(eventData, params.eventId, navigate));
    // console.log(eventData);
  }

  return (
    <EventForm method={"PATCH"} event={handleSubmit} value={eventToBeEdited} />
  );
}

export default EditEventPage;
