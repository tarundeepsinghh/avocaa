import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// reducer
export const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

//actions
export const { toggleMenu } = appSlice.actions;

//selectors
export const AppSelectors = {
  selectIsMenuOpen: (state: RootState) => state.app.isMenuOpen,
};
