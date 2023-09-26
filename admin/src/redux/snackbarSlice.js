import { createSlice } from "@reduxjs/toolkit";
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    openSnackbar: false,
    message: "",
  },
  reducers: {
    setSnackbar: (state, action) => {
      state.openSnackbar = !state.openSnackbar;
      state.message = action.payload;
    },
    resetSnackbar: (state) => {
      state.message = "";
      state.openSnackbar = false;
    },
  },
});
export const { setSnackbar, resetSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
