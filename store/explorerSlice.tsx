import { createSlice } from "@reduxjs/toolkit";

const explorerSlice = createSlice({
  name: "explorer",

  initialState: {
    isOpen: true,
  },

  reducers: {
    toggleExplorer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleExplorer } = explorerSlice.actions;

export default explorerSlice.reducer;
