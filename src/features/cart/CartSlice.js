import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

export const getTotalAmount = cartItems => {
  return cartItems.reduce((prev, curr) => prev + curr.amount, 0);
};
export const getTotalPrice = cartItems => {
  return cartItems.reduce((prev, curr) => prev + curr.price * curr.amount, 0);
};

// 買い物かごの初期化
const initialState = cartItems;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: () => {
      return [];
    },
    removeItem: (state, { payload: id }) => {
      return state.filter(cartItem => cartItem.id !== id);
    },
    incrementItemAmount: (state, { payload: id }) => {
      state.find(cartItem => cartItem.id === id).amount++;
    },
    decrementItemAmount: (state, { payload: id }) => {
      const cartItem = state.find(cartItem => cartItem.id === id);
      cartItem.amount > 0 && cartItem.amount--;
    },
  },
});

export const {
  clearCart,
  removeItem,
  incrementItemAmount,
  decrementItemAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
