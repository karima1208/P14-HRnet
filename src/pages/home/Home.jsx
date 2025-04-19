import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyForm from "../../components/my-form/MyForm";
import MyModal from "../../components/my-modal/MyModal";
import logo from "../../assets/logo.png";
import "./styles.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="homeContainer">
        <div className="header">
        <img src={logo} alt="HRnet logo" className="logo" />
        <h1>HRnet</h1>
      </div>
      <Link to="/employee" className="home-link" >View Current Employees</Link>
      <h2>Create Employee</h2>
      <MyForm setOpenModal={setOpenModal} />
      <MyModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Home;
