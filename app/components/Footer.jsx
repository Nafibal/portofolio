import React from "react";
import "./Footer.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="mailto:baliya363@gmail.com"
            target="blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://wa.me/+6282257672883"
            target="blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.instagram.com/nafi_baliya/"
            target="blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.linkedin.com/in/mohammad-nafi-baliyamalkan-bb8a11185/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://github.com/Nafibal"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
      </ul>
      {/* <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul> */}
      <p>&copy;2024 Nafi Baliya | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
