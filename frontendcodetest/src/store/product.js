import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "products",
  initialState: { products: false },
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
    },
    clearProductData: (state) => {
      state.products = false;
    },
  },
});

export const { getProductData, clearProductData } = productReducer.actions;

export default productReducer.reducer;
