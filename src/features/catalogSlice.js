import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  items: data,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
});

export default catalogSlice.reducer;