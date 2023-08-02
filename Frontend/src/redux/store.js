import { configureStore } from "@reduxjs/toolkit";
import  addAvatarSlice  from "./reducersSlice";

export const store = configureStore({
  reducer: {
    addAvatar: addAvatarSlice,
  },
});
