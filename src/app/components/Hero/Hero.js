"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex align-items-center text-white position-relative overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Animated Gradient Background */}
      <div className="hero-gradient"></div>

      {/* Luxury Glass Morphism Bubbles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`bubble bubble-${i + 1} glass-bubble`}
        ></div>
      ))}

      {/* Animated Orb */}
      <div className="floating-orb"></div>

      <div className="container py-5 position-relative z-2">
        <div className="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <div>
              <h1 className="fw-bold display-3 mb-3 premium-title">
                Hi, I'm Tungana Naveen
              </h1>

              <p className="fs-4 mb-3 premium-subtitle">
                <strong className="gradient-text">Full Stack Developer</strong>{" "}
                specializing in{" "}
                <span className="text-highlight">Mobile & Web Development</span>
                . I craft exceptional digital experiences with cutting-edge
                technology.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-5">
                <a
                  href="#portfolio"
                  className="btn btn-premium primary-btn px-5 py-3"
                  aria-label="View Portfolio"
                >
                  <span className="btn-content">
                    <i className="bi bi-grid-3x3-gap me-2"></i>
                    View Portfolio
                  </span>
                  <div className="btn-glow"></div>
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-premium secondary-btn px-5 py-3"
                  aria-label="Contact Me"
                >
                  <span className="btn-content">
                    <i className="bi bi-send me-2"></i>
                    Contact Me
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 text-center position-relative mb-4 mb-lg-0">
            <div className="image-container">
              <div className="premium-image-wrapper mx-auto">
                <Image
                  src="/profile.jpg"
                  alt="Tungana Naveen - Full Stack Developer"
                  width={320}
                  height={320}
                  className="premium-profile-image"
                  priority
                />
                {/* Floating Elements */}
                <div className="floating-element react-badge">
                  <i className="bi bi-react"></i>
                </div>
                <div className="floating-element js-badge">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="floating-element node-badge">
                  <i className="bi bi-server"></i>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="experience-badge">
                <div className="badge-content">
                  <i className="bi bi-award-fill me-2"></i>
                  <div>
                    <div className="badge-title">2+ Years</div>
                    <div className="badge-subtitle">Experience</div>
                  </div>
                </div>
                <div className="badge-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </section>
  );
}

export default Hero;
