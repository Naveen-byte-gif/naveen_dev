"use client";

import React from "react";
import "./Skills.css";

const skills = [
  {
    title: "Mobile Development",
    icon: "📱",
    tech: "React Native, Flutter, Dart, iOS, Android",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea",
  },
  {
    title: "Web Development",
    icon: "💻",
    tech: "Next.js, React, HTML, CSS, JS, BootStrap",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f5576c",
  },
  {
    title: "Backend Development",
    icon: "🖥️",
    tech: "Node.js, Firebase, REST APIs, Express",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe",
  },
  {
    title: "Database & Storage",
    icon: "🗄️",
    tech: "MongoDB, SQLite, Hive, SQL, Firebase",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    color: "#43e97b",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section position-relative overflow-hidden"
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
        <div className="text-center mb-6">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Technical Expertise
            </h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle">
            I leverage a range of technologies to turn ideas into reality,
            building robust and scalable solutions from mobile apps to backend
            systems, while continuously learning and adapting to deliver modern,
            efficient software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-3 d-flex" key={index}>
              <div
                className="premium-skill-card"
                style={{
                  "--card-gradient": skill.gradient,
                  "--card-color": skill.color,
                }}
              >
                {/* Card Glow Effect */}
                <div className="card-glow"></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Icon Container */}
                  <div className="icon-container">
                    <div className="icon-wrapper">
                      <span className="skill-icon">{skill.icon}</span>
                      <div className="icon-glow"></div>
                    </div>
                  </div>

                  {/* Skill Info */}
                  <div className="skill-info">
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-tech">{skill.tech}</p>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ background: skill.gradient }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Effect Layer */}
                  <div className="hover-layer"></div>
                </div>

                {/* Corner Decorations */}
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
