import { configureStore } from "@reduxjs/toolkit";
import addAvatarSlice from "./reducersSlice";
import listAvatarSlice from "./reducerListSlice";

export const store = configureStore({
  reducer: {
    addAvatar: addAvatarSlice,
    listAvatar: listAvatarSlice,
  },
});
