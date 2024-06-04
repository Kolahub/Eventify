import React, { useEffect } from 'react'
import EventItem from '../components/EventItem'
import { useDispatch, useSelector } from 'react-redux'
import { getEventDetails } from '../store/eventsActions'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
  const param = useParams()
  const dispatch = useDispatch()
  const eventDetails = useSelector(state => state.eventDetails)
  
  useEffect(() => {
    dispatch(getEventDetails(param.eventId))
  }, [dispatch, param.eventId])

  return (
    <>
    <EventItem event={eventDetails}/>
    </>
  )
}

export default EventDetailPage