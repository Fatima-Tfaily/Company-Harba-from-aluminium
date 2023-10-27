import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="h">
        <div className="logo">Harba Aluminium Company</div>
        <div className="menu">
          <ul className="menu-ul">
            <li className="menu-li">
              <a href="#">
                <Link to="/"> Home</Link>
              </a>
            </li>
            <li className="m">
              <a href="#about"> About</a>
            </li>
            <li className="m">
              <a href="#services"> Services</a>
            </li>
            <li className="m">
              <a href="#contact"> Contact</a>
            </li>
            <li className="menu-li">
              <a href="#work">
                {" "}
                <Link to="/work"> Work</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
