import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" />
            <div>ProjectMgmt</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
