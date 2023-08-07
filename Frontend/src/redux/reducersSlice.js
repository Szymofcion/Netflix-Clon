import { createSlice } from "@reduxjs/toolkit";
import avatar1 from "../component/img/avatar1.png";
import avatar2 from "../component/img/avatar2.png";
import avatar3 from "../component/img/avatar3.png";
import avatar4 from "../component/img/avatar4.png";
const avatarImg = [
  {
    id: 1,
    img: avatar1,
  },
  {
    id: 2,
    img: avatar2,
  },
  {
    id: 3,
    img: avatar3,
  },
  {
    id: 4,
    img: avatar4,
  },
];
const initialState = {
  image: avatarImg,
  lastId: 4,
  selectedImage: null,
};

export const addAvatarSlice = createSlice({
  name: "addAvatar",
  initialState,
  reducers: {
    addAvatarImage: (state, action) => {
      const { img } = action.payload;
      state.image.push({ id: state.lastId + 1, img });
      state.lastId += 1;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { addAvatarImage,selectImage } = addAvatarSlice.actions;

export default addAvatarSlice.reducer;
