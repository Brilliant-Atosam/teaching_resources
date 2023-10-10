import { createSlice } from "@reduxjs/toolkit";

export const videosSlices = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    loadVideos: (state, action) => {
      state.videos = action.payload;
    },
    videosInitialState: (state) => {
      state.videos = [];
    },
  },
});

export const { loadVideos, videosInitialState } = videosSlices.actions;
export default videosSlices.reducer;
