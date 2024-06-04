import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./EventForm.module.css";

function EventForm({ method, event, value }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: value.title || "",
    image: value.image || "",
    date: value.date || "",
    description: value.description || "",
  });

  function cancelHandler() {
    navigate("..", {
      relative: "path",
    });
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      action="http://localhost:8080/events"
      method={method}
      className={classes.form}
      onSubmit={(e) => event(e)}
    >
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={changeHandler}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          value={formData.image}
          onChange={changeHandler}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={changeHandler}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={changeHandler}
          rows="5"
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default EventForm;
