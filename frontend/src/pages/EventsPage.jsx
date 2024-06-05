import EventsList from "../components/EventsList";

import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events
  console.log(events);

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const res = await fetch("http://localhost:8080/events");
  if (!res.ok) {
    throw json({ message: 'Could not fetch events.'}, {
      status: 500
    })
  } else {
    return res;
  }
}
