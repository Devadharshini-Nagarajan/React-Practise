import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer
  },
});

export default appStore;
