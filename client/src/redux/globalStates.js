import { createSlice } from "@reduxjs/toolkit";
export const globalStates = createSlice({
  name: "globalStates",
  initialState: {
    toggleMenu: false,
    toggleFeedback: false,
  },
  reducers: {
    setToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
    setToggleFeedback: (state) => {
      state.toggleFeedback = !state.toggleFeedback;
    },
  },
});
export const { setToggleMenu, setToggleFeedback } = globalStates.actions;
export default globalStates.reducer;
