import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: "PENDING" and true: "DONE"
    currentlyFetching: false,
  },
  reducers: {
    markfetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markfetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markfetchFinish: (state) => {
      return (state.currentlyFetching = false); 
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
