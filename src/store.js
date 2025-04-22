// configure le store global Redux, qui regroupe toutes les slices de l'appli.
// crée le “centre de contrôle” Redux
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  devTools: true, // ✅ Active Redux DevTools dans le navigateur pour voir et suivre l’état en direct
});
