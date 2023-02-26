import { configureStore } from "@reduxjs/toolkit";
import searchProductReducer from "store/product";
import paginationReducer from "store/pagination";

export const store = configureStore({
  reducer: {
    searchProduct: searchProductReducer,
    pagination: paginationReducer,
  },
});
