import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "../features/catalogSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});