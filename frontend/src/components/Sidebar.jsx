// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaUserFriends, FaTasks, FaEnvelope, FaCalendarAlt, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const { logout, role } = useAuth();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        CRM
      </div>
      <nav className="sidebar-content">
        <a href="#" className="sidebar-link"><FaHome /> <span>Inicio</span></a>
        <a href="#" className="sidebar-link"><FaUserFriends /> <span>Clientes</span></a>
        <a href="#" className="sidebar-link"><FaTasks /> <span>Tareas</span></a>
        <a href="#" className="sidebar-link"><FaEnvelope /> <span>Solicitudes</span></a>
        <a href="#" className="sidebar-link"><FaCalendarAlt /> <span>Calendario</span></a>
        <a href="#" className="sidebar-link"><FaCogs /> <span>Configuración</span></a>
        {role === 'admin' && (
          <a href="#" className="sidebar-link"><FaCogs /> <span>Admin</span></a>
        )}
      </nav>
      <div className="sidebar-logout" onClick={logout}>
        <FaSignOutAlt /> <span>Cerrar sesión</span>
      </div>
    </div>
  );
};

export default Sidebar;
