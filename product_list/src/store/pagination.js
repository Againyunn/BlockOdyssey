import { createSlice } from "@reduxjs/toolkit";

export const paginationReducer = createSlice({
  name: "pagination",
  initialState: {
    totalPages: 0,
    selectedPage: 1,
    showItems: 10,
    totalItemLength: 0,
  },
  reducers: {
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setShowItems: (state, action) => {
      state.showItems = action.payload;
    },
    setTotalItemLength: (state, action) => {
      state.totalItemLength = action.payload;
    },
  },
});

export const {
  setTotalPages,
  setSelectedPage,
  setShowItems,
  setTotalItemLength,
} = paginationReducer.actions;

export default paginationReducer.reducer;
