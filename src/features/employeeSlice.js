// gérer les employés dans Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // définit l’état de départ
  employees: [],
};
const employeeSlice = createSlice({
  // crée un nom de slice
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // ajoute un nouvel employé
      state.employees.push(action.payload);
    },
  },
});
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
