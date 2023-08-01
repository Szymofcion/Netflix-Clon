import { configureStore } from "@reduxjs/toolkit";
import { addAvatarSlice } from "./reducersSlice";

const store = configureStore({
  reducer: {
    addAvatarImage: addAvatarSlice,
  },
});
export default store;
