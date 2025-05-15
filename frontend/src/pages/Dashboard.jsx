// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />                  {/* Esto tendrá la clase .sidebar */}
      <div className="main-content">
        <h1>Bienvenido al panel principal</h1>
        {/* Contenido del dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
