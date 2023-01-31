import { configureStore } from "@reduxjs/toolkit";
import productReducer from "store/product";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
