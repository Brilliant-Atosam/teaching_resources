import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminCredential: "",
  },
  reducers: {
    adminLogin: (state, action) => {
      state.adminCredential = action.payload;
    },
    logout: (state) => {
      state.adminCredential = "";
    },
  },
});

export const {} = adminSlice.actions;

export default adminSlice.reducer;
