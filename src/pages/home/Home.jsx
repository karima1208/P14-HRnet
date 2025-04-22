import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyForm from "../../components/my-form/MyForm";
import MyModal from "component-modal-karima";
import "component-modal-karima/styles/modal.css";

import logo from "../../assets/logo.png";
import "./styles.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="homeContainer">
      <div className="header">
        <img src={logo} alt="HRnet logo" className="logo" loading="lazy" />
        <h1>HRnet</h1>
      </div>

      <Link to="/employee" className="home-link">View Current Employees</Link>
      <h2>Create Employee</h2>

      <MyForm setOpenModal={setOpenModal} />

      {/* Utilisation du composant modal avec le contenu intégré directement dans le composant */}
    <div>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <MyModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
    </div>
  );
};

export default Home;
