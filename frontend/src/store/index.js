import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./eventStore";

const store = configureStore({
  reducer: eventsSlice.reducer,
});

export default store;
