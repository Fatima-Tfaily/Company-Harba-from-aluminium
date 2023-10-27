import React from "react";
import "../styles/services.css";
import image10 from "../images/image10.jpg";

const Services = () => {
  return (
    <div className="service" id="services">
      <h1 className="title">Services</h1>
      <div className="p">
        <div class="part1">
          <h2>My services is:</h2>
          <ul className="ul_service">
            <li>Design and installation kitchen cabinets.</li>
            <li>Design and installation of doors and windows.</li>
            <li>Design and installation of bed rooms.</li>
            <li>Design and installation of aluminium walls for salons.</li>
            <li>Design and installation of bathtub door.</li>
          </ul>
        </div>
        <div className="part2">
          <img src={image10} />
        </div>
      </div>
    </div>
  );
};

export default Services;
