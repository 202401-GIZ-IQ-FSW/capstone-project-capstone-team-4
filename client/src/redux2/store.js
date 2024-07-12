import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./reducers/ticketSlice";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* additional middleware */),
});

export default store;
