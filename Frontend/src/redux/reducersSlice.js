import { createSlice } from "@reduxjs/toolkit";
import avatar1 from "../component/img/avatar1.png";
import avatar2 from "../component/img/avatar2.png";
import avatar3 from "../component/img/avatar3.png";
import avatar4 from "../component/img/avatar4.png";

// const initialState = {
//   image: [
//     {
//       id: 1,
//       img: avatar1,
//     },
//     {
//       id: 2,
//       img: avatar2,
//     },
//     {
//       id: 3,
//       img: avatar3,
//     },
//     {
//       id: 4,
//       img: avatar4,
//     },
//   ],
// };

export const addAvatarSlice = createSlice({
  name: "addAvatar",
  initialState: [],
  reducers: {
    addAvatarImage: (state, action) => {
      state.push(action.payload);
    },
  },
});

