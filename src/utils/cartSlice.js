import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  //it takes config
  name: "cart",
  initialState: {
    items: ["pizza", "veg pasta","Burger"],
  },
  //reducres is basically an object haas diff types of actions
  reducers: {
    //mutating the state here
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: () => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions; //actions is a keyword
export default cartSlice.reducer;
