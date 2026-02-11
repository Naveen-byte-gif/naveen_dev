"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const hireBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "portfolio",
        "services",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar entrance animation
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      // Logo animation
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: 0.2,
            ease: "back.out(1.7)",
          },
        );
      }

      // Nav links animation
      navLinksRef.current.forEach((link, index) => {
        if (link) {
          gsap.fromTo(
            link,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.4 + index * 0.1,
              ease: "power2.out",
            },
          );
        }
      });

      // Hire button animation
      if (hireBtnRef.current) {
        gsap.fromTo(
          hireBtnRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (open) {
        // Show mobile menu
        mobileMenuRef.current.style.display = "block";
        mobileMenuRef.current.style.visibility = "visible";

        // Mobile menu open animation
        gsap.fromTo(
          mobileMenuRef.current,
          {
            height: 0,
            opacity: 0,
            y: -20,
          },
          {
            height: "auto",
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
        );

        // Animate mobile menu items
        const mobileItems = mobileMenuRef.current.querySelectorAll(".nav-link");
        gsap.fromTo(
          mobileItems,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.2,
          },
        );
      } else {
        // Mobile menu close animation
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (mobileMenuRef.current) {
              mobileMenuRef.current.style.display = "none";
            }
          },
        });
      }
    }
  }, [open]);

  const handleNavClick = (sectionId) => {
    setOpen(false);
    setActiveSection(sectionId);

    // Add click animation to the nav link
    const clickedLink = navLinksRef.current.find(
      (link) => link && link.getAttribute("href") === `#${sectionId}`,
    );

    if (clickedLink) {
      gsap.to(clickedLink, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
  };

  const handleHireClick = () => {
    if (hireBtnRef.current) {
      gsap.to(hireBtnRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav
      ref={navbarRef}
      className={`premium-navbar navbar navbar-expand-lg fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {/* Animated Background */}
      <div className="navbar-background"></div>

      {/* Navbar Glow Effect */}
      <div className="navbar-glow"></div>

      <div className="container position-relative">
        {/* Logo with Animation */}
        <a
          ref={logoRef}
          className="navbar-brand premium-logo"
          href="#home"
          onClick={() => handleNavClick("home")}
        >
          <div className="logo-container">
            <img
              src="/brand_logo.jpg"
              className="logo-image"
              alt="Tungana Naveen - Full Stack Developer"
              onError={(e) => {
                // If image fails to load, show text fallback
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement("div");
                  fallback.className = "logo-fallback";
                  fallback.textContent = "TN";
                  parent.appendChild(fallback);
                }
              }}
            />
            <div className="logo-glow"></div>
            <div className="logo-pulse"></div>
          </div>
          <span className="logo-text">
            Tungana Naveen
            <span className="logo-subtitle">Full Stack Developer</span>
          </span>
        </a>

        {/* Animated Mobile Toggle Button - ONLY on Mobile */}
        <button
          ref={togglerRef}
          className="navbar-toggler premium-toggler d-lg-none"
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <div className={`toggler-icon ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav premium-nav mx-auto">
            {[
              "home",
              "about",
              "skills",
              // "portfolio",
              "services",
              "contact",
            ].map((section, index) => (
              <li key={section} className="nav-item">
                <a
                  ref={(el) => (navLinksRef.current[index] = el)}
                  className={`nav-link premium-nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                  href={`#${section}`}
                  onClick={() => handleNavClick(section)}
                >
                  <span className="nav-text">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  <div className="nav-indicator"></div>
                  <div className="nav-glow"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Menu - ONLY on Mobile */}
        <div
          ref={mobileMenuRef}
          className="mobile-menu d-lg-none"
          style={{ display: open ? "block" : "none" }}
        >
          <div className="mobile-menu-content">
            <ul className="navbar-nav premium-nav-mobile">
              {[
                "home",
                "about",
                "skills",
                "portfolio",
                "services",
                "contact",
              ].map((section, index) => (
                <li key={section} className="nav-item">
                  <a
                    className={`nav-link premium-nav-link ${
                      activeSection === section ? "active" : ""
                    }`}
                    href={`#${section}`}
                    onClick={() => handleNavClick(section)}
                  >
                    <span className="nav-text">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    <div className="nav-indicator"></div>
                    <div className="nav-glow"></div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Hire Button */}
            <div className="mobile-hire-section">
              <a
                href="#contact"
                className="premium-hire-btn mobile"
                onClick={() => {
                  handleHireClick();
                  setOpen(false);
                }}
              >
                <span className="btn-text">Hire Me</span>
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Hire Me Button - Hidden on Mobile */}
        <div className="navbar-actions d-none d-lg-block">
          <a
            ref={hireBtnRef}
            href="#contact"
            className="premium-hire-btn"
            onClick={handleHireClick}
          >
            <span className="btn-text">Hire Me</span>
            <div className="btn-icon">
              <i className="bi bi-arrow-up-right"></i>
            </div>
            <div className="btn-glow"></div>
            <div className="btn-particles">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="scroll-progress">
        <div
          className="progress-bar"
          style={{
            width: `${
              (([
                "home",
                "about",
                "skills",
                "portfolio",
                "services",
                "contact",
              ].indexOf(activeSection) +
                1) /
                6) *
              100
            }%`,
          }}
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;
