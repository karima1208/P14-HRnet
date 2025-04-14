import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Employee from "../pages/employee/Employee";
import Home from "../pages/home/Home";

const Navigator = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Navigator;
