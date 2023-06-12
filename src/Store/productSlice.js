import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});
