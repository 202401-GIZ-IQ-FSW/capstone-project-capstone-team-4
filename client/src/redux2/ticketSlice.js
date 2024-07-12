import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../services/api/api";

const initialState = {
  tickets: [],
  loading: "idle",
  error: null,
};

export const fetchTicketsAsync = createAsyncThunk(
  "ticket/fetchTickets",
  async () => {
    try {
      const response = await axios.get("/tickets"); // Adjust endpoint URL
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch tickets");
    }
  }
);

export const searchTicketsAsync = createAsyncThunk(
  "ticket/searchTickets",
  async (searchCriteria) => {
    try {
      const response = await axios.post("/tickets/search", searchCriteria); // Adjust endpoint URL
      return response.data;
    } catch (error) {
      throw new Error("Failed to search tickets");
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTicketsAsync.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchTicketsAsync.fulfilled]: (state, action) => {
      state.tickets = action.payload;
      state.loading = "succeeded";
      state.error = null;
    },
    [fetchTicketsAsync.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ?? "An error occurred";
    },
    [searchTicketsAsync.pending]: (state) => {
      state.loading = "pending";
    },
    [searchTicketsAsync.fulfilled]: (state, action) => {
      state.tickets = action.payload;
      state.loading = "succeeded";
      state.error = null;
    },
    [searchTicketsAsync.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ?? "An error occurred";
    },
  },
});

export const {} = ticketSlice.actions;

export default ticketSlice.reducer;
