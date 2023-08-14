import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const slectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      const videoId = action.payload;

      if (!state.some((item) => item === videoId)) {
        state.push(videoId);
      }
    },
  },
});

export const { addVideo } = slectedVideoSlice.actions;

export default slectedVideoSlice.reducer;
