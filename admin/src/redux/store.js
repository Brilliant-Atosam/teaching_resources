import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import admin from "./adminSlice";
import snackbar from "./snackbarSlice";
import videos from "./videosSlice";
const rootReducers = combineReducers({
  admin,
  snackbar,
  videos,
});
export const store = configureStore({
  reducer: rootReducers,
});
