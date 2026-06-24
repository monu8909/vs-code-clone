import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeMenu: string | null;
  selectedCommand: string | null;
}

const initialState: MenuState = {
  activeMenu: null,
  selectedCommand: null,
};

const menuSlice = createSlice({
  name: "menu",

  initialState,

  reducers: {
    setActiveMenu: (state, action: PayloadAction<string | null>) => {
      state.activeMenu = action.payload;
    },

    executeCommand: (state, action: PayloadAction<string>) => {
      state.selectedCommand = action.payload;
    },
  },
});

export const { setActiveMenu, executeCommand } = menuSlice.actions;

export default menuSlice.reducer;
