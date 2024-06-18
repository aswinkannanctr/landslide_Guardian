import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarStyle.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
