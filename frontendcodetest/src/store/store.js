import { configureStore } from "@reduxjs/toolkit";
import searchProductReducer from "store/product";

export const store = configureStore({
  reducer: {
    searchProduct: searchProductReducer,
  },
});
