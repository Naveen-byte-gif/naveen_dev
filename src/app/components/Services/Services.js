"use client";

import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "Mobile App Development",
    icon: "bi-phone",
    desc: "Cross-platform mobile applications using Flutter with native performance and beautiful UI.",
    backTitle: "Innovate on the Go",
    backDesc:
      "Seamless mobile experiences built for performance and scalability.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea",
    tech: ["Flutter", "Dart", "React Native", "iOS", "Android"],
  },
  {
    title: "Web Development",
    icon: "bi-globe",
    desc: "Modern web applications with Next.js and React, featuring responsive design and optimal performance.",
    backTitle: "Crafted for the Web",
    backDesc:
      "High-performing, SEO-optimized, and responsive websites tailored to your brand.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f5576c",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    title: "API Integration",
    icon: "bi-gear",
    desc: "Backend development and API integration services to connect your applications with various services.",
    backTitle: "Connected Experiences",
    backDesc:
      "Robust APIs and integrations that make your ecosystem work in harmony.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe",
    tech: ["REST APIs", "GraphQL", "Firebase", "Node.js", "Express"],
  },
  {
    title: "UI/UX Design",
    icon: "bi-brush",
    desc: "User-centered design approach creating intuitive interfaces and engaging user experiences.",
    backTitle: "Design that Inspires",
    backDesc:
      "Intuitive, aesthetic, and user-first designs that enhance engagement and usability.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    color: "#43e97b",
    tech: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "User Research"],
  },
  {
    title: "App Deployment",
    icon: "bi-rocket",
    desc: "Complete deployment solutions for Play Store, App Store, and web hosting platforms.",
    backTitle: "Launch with Confidence",
    backDesc:
      "End-to-end deployment and optimization for smooth, successful launches.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    color: "#fa709a",
    tech: ["Play Store", "App Store", "Vercel", "Netlify", "AWS"],
  },
  {
    title: "Technical Support",
    icon: "bi-headset",
    desc: "Ongoing maintenance and support services to keep your applications running smoothly.",
    backTitle: "Here Beyond Launch",
    backDesc:
      "Reliable support and updates ensuring your product runs at its best.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    color: "#a8edea",
    tech: ["Maintenance", "Updates", "Bug Fixing", "Performance", "Security"],
  },
];

const Services = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCubeClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section
      id="services"
      className="services-section position-relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        {/* Animated Grid */}
        <div className="animated-grid"></div>
      </div>

      <div className="container py-6 position-relative z-2">
        {/* Section Header */}
        <header className="text-center mb-6">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Premium Services
            </h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle">
            Comprehensive development solutions crafted with cutting-edge
            technology and innovative design approaches for your business
            success
          </p>
        </header>

        {/* 3D Cube Grid */}
        <div className="row g-5 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className={`premium-cube-card ${flippedCards[index] ? 'is-flipped' : ''}`}
                onClick={() => handleCubeClick(index)}
                style={{
                  "--service-gradient": service.gradient,
                  "--service-color": service.color,
                }}
              >
                {/* Cube Glow Effect */}
                <div className="cube-glow"></div>

                {/* Main Cube Container */}
                <div className="premium-cube-inner">
                  {/* FRONT SIDE */}
                  <div className="cube-face cube-front premium-face">
                    <div className="face-content">
                      {/* Icon Container */}
                      <div className="icon-container">
                        <div className="icon-wrapper">
                          <i className={`bi ${service.icon}`}></i>
                          <div className="icon-glow"></div>
                        </div>
                      </div>

                      {/* Service Info */}
                      <div className="service-info">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                      </div>

                      {/* Tech Stack */}
                      <div className="tech-stack">
                        {service.tech.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {service.tech.length > 3 && (
                          <span className="tech-tag more">
                            +{service.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA Indicator */}
                      <div className="cta-indicator">
                        <span>Click to Explore</span>
                        <div className="indicator-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="corner-decoration top-left"></div>
                    <div className="corner-decoration top-right"></div>
                    <div className="corner-decoration bottom-left"></div>
                    <div className="corner-decoration bottom-right"></div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="cube-face cube-back premium-face">
                    <div className="face-content">
                      {/* Back Icon */}
                      <div className="back-icon">
                        <i className="bi bi-stars"></i>
                        <div className="back-icon-glow"></div>
                      </div>

                      {/* Back Content */}
                      <div className="back-content">
                        <h4 className="back-title">{service.backTitle}</h4>
                        <p className="back-desc">{service.backDesc}</p>
                      </div>

                      {/* Feature List */}
                      <div className="feature-list">
                        {service.tech.map((tech, techIndex) => (
                          <div key={techIndex} className="feature-item">
                            <i className="bi bi-check-circle"></i>
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="action-button">
                        <button className="btn-glow">
                          <span>Get Started</span>
                          <i className="bi bi-arrow-up-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* Back Pattern */}
                    <div className="back-pattern"></div>
                  </div>

                  {/* CUBE SIDES */}
                  <div className="cube-face cube-top"></div>
                  <div className="cube-face cube-bottom"></div>
                  <div className="cube-face cube-left"></div>
                  <div className="cube-face cube-right"></div>
                </div>

                {/* External Glow */}
                <div className="external-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section text-center mt-6">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Ideas?</h3>
            <p className="cta-subtitle">
              Let's collaborate to build something extraordinary together
            </p>
            <button className="cta-button">
              <span>Start Your Project</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
