import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: 0,
};

export const addAvatarSlice = createSlice({
  name: "addAvatar",
  initialState,
  reducers: {
    addAvatarImage: (state) => {
      state.image += 1;
    },
  },
});

export const { addAvatarImage } = addAvatarSlice.actions;

export default addAvatarSlice.reducer;
