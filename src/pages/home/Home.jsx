import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyForm from "../../components/my-form/MyForm";
import MyModal from "../../components/my-modal/MyModal";
import "./styles.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="homeContainer">
      <h1>HRnet</h1>
      <Link to="/employee">View Current Employees</Link>
      <h2>Create Employee</h2>
      <MyForm setOpenModal={setOpenModal} />
      <MyModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Home;
