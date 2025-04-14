import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import MyTable from "../../components/my-table/MyTable";


const Employee = () => {
  return (
    <div>
      <MyTable />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Employee;
