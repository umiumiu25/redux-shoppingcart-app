import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isOpen: false,
// };
const initialState = false;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: () => {
      // state.isOpen = true;
      return true;
    },
    closeModal: () => {
      return false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
