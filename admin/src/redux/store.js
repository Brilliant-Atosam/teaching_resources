import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import admin from "./adminSlice";
import snackbar from "./snackbarSlice";
const rootReducers = combineReducers({
  admin,
  snackbar,
});
export const store = configureStore({
  reducer: rootReducers,
});
