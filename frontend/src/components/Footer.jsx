import React, { useState } from "react";
import "../styles/footer.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import gmail from "../images/gmail.svg";
import whatsapp from "../images/whatsapp.svg";
import { Link } from "react-router-dom";

const redirectToFacebook = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100087163260653&mibextid=ZbWKwL",
    "_blank"
  );
};

const redirectToInstagram = () => {
  window.open(
    "https://instagram.com/wassimharba?igshid=MzRlODBiNWFlZA==",
    "_blank"
  );
};

const redirectToTiktok = () => {
  window.open(
    "https://www.tiktok.com/@wassimharba?_t=8grAxUXtmCI&_r=1",
    "_blank"
  );
};

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("76667527");
  const link = `https://wa.me/${phoneNumber}`;
  const email = "wassim@gmail.com";

  const redirectToGmail = () => {
    window.open(`https://www.gmail.com/${email}`, "_blank");
  };

  const openChat = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="footer1">
      <div className="footer" id="contact">
        <div className="social">
          <h1 className="sous_title">Social Media</h1>
          <ul className="ul-footer">
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToFacebook();
                }}
              >
                <img src={facebook} className="footer_img" />
                <p>Wassim Harba</p>
              </a>
            </li>
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToInstagram();
                }}
              >
                <img src={instagram} className="footer_img" />
                <p>wassimharba</p>
              </a>
            </li>
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToTiktok();
                }}
              >
                <img src={tiktok} className="footer_img" />
                <p> @wassimharba</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1 className="sous_title">Contact Me</h1>
          <ul className="ul-footer">
            <li className="li-footer">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openChat();
                }}
              >
                <img src={whatsapp} className="footer_img" />
                <p>76667527</p>
              </a>
            </li>
            <br />
          </ul>
        </div>
        <div className="footer_menu">
          <ul className="ul-footer">
            <li className="li-footer">
              <a href="#about">About</a>
              <a href="service">Services</a>
              <a href="contact">Contact</a>
              <a href="#">
                <Link to="/work">Work</Link>
              </a>
            </li>
            <li className="log">
              <a href="#">
                <Link to="/login">Login</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="made">Made by Fatima Tfaily 71153332</div>
    </div>
  );
};

export default Footer;
