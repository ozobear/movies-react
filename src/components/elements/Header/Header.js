import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <img
            src="./images/reactMovie_logo.png"
            className="rmdb-logo"
            alt="rmdb-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
