"use client";
import React from "react";
import "./Services.css"; // 👈 cube animation styles

const services = [
  {
    title: "Mobile App Development",
    icon: "bi-phone",
    desc: "Cross-platform mobile applications using Flutter with native performance and beautiful UI.",
    backTitle: "Innovate on the Go",
    backDesc:
      "Seamless mobile experiences built for performance and scalability.",
  },
  {
    title: "Web Development",
    icon: "bi-globe",
    desc: "Modern web applications with Next.js and React, featuring responsive design and optimal performance.",
    backTitle: "Crafted for the Web",
    backDesc:
      "High-performing, SEO-optimized, and responsive websites tailored to your brand.",
  },
  {
    title: "API Integration",
    icon: "bi-gear",
    desc: "Backend development and API integration services to connect your applications with various services.",
    backTitle: "Connected Experiences",
    backDesc:
      "Robust APIs and integrations that make your ecosystem work in harmony.",
  },
  {
    title: "UI/UX Design",
    icon: "bi-brush",
    desc: "User-centered design approach creating intuitive interfaces and engaging user experiences.",
    backTitle: "Design that Inspires",
    backDesc:
      "Intuitive, aesthetic, and user-first designs that enhance engagement and usability.",
  },
  {
    title: "App Deployment",
    icon: "bi-rocket",
    desc: "Complete deployment solutions for Play Store, App Store, and web hosting platforms.",
    backTitle: "Launch with Confidence",
    backDesc:
      "End-to-end deployment and optimization for smooth, successful launches.",
  },
  {
    title: "Technical Support",
    icon: "bi-headset",
    desc: "Ongoing maintenance and support services to keep your applications running smoothly.",
    backTitle: "Here Beyond Launch",
    backDesc:
      "Reliable support and updates ensuring your product runs at its best.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 services-section">
      <div className="container">
        <header className="text-center mb-5">
          <h2 className="fw-bold">Services I Offer</h2>
          <p className="text-secondary">
            Comprehensive development solutions for your business needs
          </p>
        </header>

        <div className="row g-4">
          {services.map(({ title, icon, desc, backTitle, backDesc }, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="cube-card">
                <div className="cube-inner">
                  {/* FRONT SIDE */}
                  <div className="cube-face cube-front">
                    <i className={`bi ${icon} fs-1 text-primary mb-3`}></i>
                    <h3 className="h5 fw-bold">{title}</h3>
                    <p className="text-muted mt-3">{desc}</p>
                  </div>

                  {/* BACK SIDE */}
                  <div className="cube-face cube-back">
                    <i className="bi bi-stars fs-1 text-light mb-3"></i>
                    <h4 className="fw-bold text-light">{backTitle}</h4>
                    <p className="text-light small">{backDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
