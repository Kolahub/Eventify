import { createSlice } from "@reduxjs/toolkit";

const eventInitialState = {
  eventData: [],
  eventDetails: {},
};

const eventsSlice = createSlice({
  name: "eventData",
  initialState: eventInitialState,
  reducers: {
    getAllData(state, action) {
      state.eventData = action.payload;
    },
    updateData(state, action) {
      state.eventData.push(action.payload);
    },
    deleteData(state, action) {
      const findEventIndex = state.eventData.findIndex(
        (el) => el.id === action.payload
      );
      state.eventData.splice(findEventIndex, 1);
    },
    getDetails(state, action) {
      state.eventDetails = action.payload;
    },
  },
});

export const eventsAction = eventsSlice.actions;

export default eventsSlice;
