import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <Link to="/">
      <nav className="navbar">
        <div className="navbar-title">{title}</div>
      </nav>
    </Link>
  );
};

export default Navbar;
