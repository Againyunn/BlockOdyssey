import { createSlice } from "@reduxjs/toolkit";

export const searchProductReducer = createSlice({
  name: "searchProduct",
  initialState: { filter: false, search: false, isActive: false },
  reducers: {
    setFilterData: (state, action) => {
      state.filter = action.payload;
    },
    setSearchData: (state, action) => {
      state.search = action.payload;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    clearAllData: (state) => {
      state.filter = false;
      state.search = false;
    },
  },
});

export const { setFilterData, setSearchData, setIsActive, clearProductData } =
  searchProductReducer.actions;

export default searchProductReducer.reducer;
