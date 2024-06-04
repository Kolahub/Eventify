import { eventsAction } from "./eventStore";

export function getAllEvents() {
  return async (dispatch) => {
    async function fetchAllEvents() {
      try {
        const res = await fetch("http://localhost:8080/events/");
        if (!res.ok) throw new Error("failed to fetch");
        const data = await res.json();
        // console.log(data.events);
        dispatch(eventsAction.getAllData(data.events));
      } catch (err) {
        // console.log(err.message);
      }
    }

    try {
      await fetchAllEvents();
    } catch (err) {
      // console.log(err.message);
    }
  };
}

export function getEventDetails(id) {
  return async (dispatch) => {
    async function fetchEventDetails() {
      try {
        const res = await fetch(`http://localhost:8080/events/${id}`);
        if (!res.ok) throw new Error("failed to fetch");
        const data = await res.json();
        // console.log(data.event);
        dispatch(eventsAction.getDetails(data.event));
      } catch (err) {
        // console.log(err.message);
      }
    }

    try {
      await fetchEventDetails();
    } catch (err) {
      // console.log(err.message);
    }
  };
}

export function addEvents(data, navigate) {
  return async (dispatch) => {
    async function addEvent() {
      try {
        const res = await fetch(`http://localhost:8080/events`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const EventData = await res.json();
        // console.log(EventData);
        navigate("..", {
          relative: "path",
        });
      } catch (err) {
        // console.log(err.message);
      }
    }

    try {
      await addEvent();
    } catch (err) {
      // console.log(err.message);
    }
  };
}

export function deleteEvents(id, navigate) {
  return async (dispatch) => {
    async function deleteEvent() {
      try {
        // console.log(id);
        const res = await fetch(`http://localhost:8080/events/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
        navigate("..", {
          relative: "path",
        });
      } catch (err) {
        console.log(err.message);
      }
    }

    try {
      await deleteEvent();
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function editEvents(data, id, navigate) {
  return async (dispatch) => {
    async function editEvent() {
      try {
        const res = await fetch(`http://localhost:8080/events/${id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const eventData = await res.json();
        console.log(eventData);
        navigate("..", {
          relative: "path",
        });
      } catch (err) {}
    }

    try {
      await editEvent();
    } catch (err) {
      console.log(err.message);
    }
  };
}
