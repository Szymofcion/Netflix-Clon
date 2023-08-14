import { configureStore } from "@reduxjs/toolkit";
import addAvatarSlice from "./reducersSlice";
import listAvatarSlice from "./reducerListSlice";
import slectedVideoSlice from "./reducerFavotoriteSlice";
export const store = configureStore({
  reducer: {
    addAvatar: addAvatarSlice,
    listAvatar: listAvatarSlice,
    selectedVideos: slectedVideoSlice,
  },
});
