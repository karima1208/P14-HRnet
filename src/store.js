// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  devTools: true, // ✅ Active Redux DevTools
});
