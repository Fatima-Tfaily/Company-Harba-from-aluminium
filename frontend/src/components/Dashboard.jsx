import React from "react";
import Kitchen from "./Kitchen";
import Cabinet from "./Cabinet";
import Facade from "./Facade";
import Other from "./Other";
import { useState } from "react";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="responsive">
        <p>
          click to go a{" "}
          <a>
            <Link to="/">Home</Link>
          </a>{" "}
          page
        </p>
      </div>
      <div className="side-menu">
        <p className="dash-title">Dashboard</p>
        <ul className="dash-menu">
          <li className="dash-menu-item">
            <a href="#displayK">Display Kitchen</a>
          </li>
          <li className="dash-menu-item">
            <a href="#addK">Add Kitchen</a>
          </li>
          <li className="dash-menu-item">
            <a href="#displayC">Display Cabinets</a>
          </li>
          <li className="dash-menu-item">
            <a href="#addC">Add Cabinets</a>
          </li>
          <li className="dash-menu-item">
            <a href="#displayF">Facades and Railings</a>
          </li>
          <li className="dash-menu-item">
            <a href="#addF">Add Facades and Railings</a>
          </li>
          <li className="dash-menu-item">
            <a href="#displayO">Facades and Railings</a>
          </li>
          <li className="dash-menu-item">
            <a href="#addO">Add Facades and Railings</a>
          </li>
          <li className="dash-menu-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <Kitchen />
        <Cabinet />
        <Facade />
        <Other />
      </div>
    </div>
  );
}

export default Dashboard;
