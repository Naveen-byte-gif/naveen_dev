"use client";
import React from "react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Mobile App Development",
  "Web Development",
  "API Integration",
  "UI/UX Design",
  "App Deployment",
  "Technical Support",
];

const socialLinks = [
  {
    icon: "bi bi-linkedin",
    href: "https://www.linkedin.com/in/tungananaveen",
    label: "LinkedIn",
  },
  {
    icon: "bi bi-github",
    href: "https://github.com/tungananaveen",
    label: "GitHub",
  },
  {
    icon: "bi bi-twitter",
    href: "https://twitter.com/tungananaveen",
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-md-start text-center">
          {/* About Me / Developer Info */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Tungana Naveen</h5>
            <p className="text-secondary">
              Full Stack Developer specializing in Flutter and Next.js. I help
              businesses build robust, scalable mobile & web applications.
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="col-6 col-md-3 mb-4" aria-label="Quick Navigation">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map(({ label, href }) => (
                <li key={label} className="mb-2">
                  <a
                    href={href}
                    className="text-secondary text-decoration-none"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <section className="col-6 col-md-3 mb-4" aria-label="Services">
            <h5 className="fw-bold mb-3">Services I Offer</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="text-secondary mb-2">
                  <i className="bi bi-check2-circle me-2 text-success"></i>
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* Connect With Me */}
          <section
            className="col-12 col-md-3 mb-4"
            aria-label="Connect With Me"
          >
            <h5 className="fw-bold mb-3">Connect With Me</h5>
            <div className="d-flex justify-content-md-start justify-content-center gap-3 fs-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-secondary"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} Tungana Naveen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
