import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminCredential: null,
  },
  reducers: {
    adminLogin: (state, action) => {
      state.adminCredential = action.payload;
    },
    logout: (state) => {
      state.adminCredential = null;
    },
  },
});

export const { adminLogin, logout } = adminSlice.actions;

export default adminSlice.reducer;
