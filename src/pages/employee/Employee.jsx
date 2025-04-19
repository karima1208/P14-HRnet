import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import MyTable from "../../components/my-table/MyTable";
import "./styles.css";

const Employee = () => {
  return (
    <div>
      <MyTable />
      <div className="link-container">
      <Link to="/" className="home-link">Home</Link>
      </div>
    </div>
  );
};
export default Employee;
