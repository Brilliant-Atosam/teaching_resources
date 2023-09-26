import { configureStore } from "@reduxjs/toolkit";
import admin from "./adminSlice";
export const store = configureStore({
  reducer: {
    admin,
  },
});
