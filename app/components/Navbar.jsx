"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ path }) => {
  // const path = usePathname();

  const [scrollTop, setScrollTop] = useState(0);
  const prevScroll = useRef();
  const router = useRouter();

  const [activeMobile, setActiveMobile] = useState(false);

  const handleActiveMobile = () => {
    setActiveMobile(!activeMobile);
  };

  useEffect(() => {
    setActiveMobile(false);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    prevScroll.current = scrollTop;
  }, [scrollTop]);

  return (
    <nav
      className={`navigation ${
        prevScroll.current < scrollTop ? "scroll" : ""
      } ${activeMobile ? "mobile_active" : ""} ${
        scrollTop > 4800 ? "" : "dark"
      }`}
    >
      <button className="toggle_button" onClick={handleActiveMobile}>
        {activeMobile ? (
          <FontAwesomeIcon icon={faXmark} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="icon" />
        )}
      </button>
      <div className="container">
        <div className="logo">
          <h1>
            NAFI<span>BAL</span>
          </h1>
        </div>
        <ul className="nav_list">
          <Link className={`nav_item `} to="home" smooth={true} duration={1000}>
            Home
          </Link>
          <Link className={`nav_item`} to="about" smooth={true} duration={1000}>
            About
          </Link>
          <Link
            className={`nav_item`}
            to="certification"
            smooth={true}
            duration={1000}
          >
            Certification
          </Link>
          <Link
            className={`nav_item`}
            to="projects"
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
