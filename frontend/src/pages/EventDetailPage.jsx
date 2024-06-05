import EventItem from '../components/EventItem'
import { json, useRouteLoaderData, redirect } from 'react-router-dom'

function EventDetailPage() {
const data = useRouteLoaderData('event-detail')
const eventDetails = data.event

  return (
    <>
    <EventItem event={eventDetails}/>
    </>
  )
}

export default EventDetailPage

export async function loader ( { request, params } ) {
  const id = params.eventId
  const res = await fetch(`http://localhost:8080/events/${id}`);
  if (!res.ok) {
    throw json({message: 'Could get details on this event.'}, {
      status: 500
    })
  } else {
    return res
  }
}

export async function action ({ request, params }) {
  const eventId = params.eventId

  const res = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: 'DELETE'
  })
  if (!res.ok) {
    throw json(
      {message: 'Could not delete event.'},
      {
        status: 500,
      }
    )
  }
  return redirect('/events')
}