"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-primary fs-4" href="#home">
          <img
            src="./brand_logo.jpg"
            className="img-fluid border border-primary rounded-circle"
            alt="Brand Logo"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
            }}
          />
        </a>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            open ? "show" : ""
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hire Me button */}
        <div className="d-none d-lg-block">
          <a
            href="#contact"
            className="btn text-white px-4 rounded-3"
            style={{ backgroundColor: "#ff7a00", borderColor: "#ff7a00" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
