"use client";

import React from "react";
import Image from "next/image";
import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="about-section position-relative overflow-hidden"
      aria-label="About Me Section"
    >
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container py-6">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <div className="section-header">
            <h2 className="section-title gradient-text">About Me</h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle">
            Innovative full-stack and mobile developer passionate about
            transforming ideas into user-friendly, impactful applications that
            drive business growth while continuously embracing new technologies.
          </p>
        </div>

        <div className="row align-items-center justify-content-between g-5">
          {/* LEFT CONTENT - Properly aligned */}
          <div className="col-lg-6 col-xl-6">
            <article className="content-wrapper">
              <div className="section-badge">
                <span>Professional Journey</span>
              </div>

              <h3 className="content-title">
                Crafting Digital Excellence Through Code
              </h3>

              <p className="content-text">
                With over{" "}
                <strong className="highlight-text">
                  2+ years of experience
                </strong>{" "}
                in software development, I specialize in creating cross-platform
                mobile applications using{" "}
                <strong className="highlight-text">Flutter</strong> and modern
                web applications with{" "}
                <strong className="highlight-text">Next.js</strong>. My passion
                lies in building user-centric solutions that solve real-world
                problems.
              </p>

              {/* Tech Stack Indicators */}
              <div className="tech-stack mb-4">
                <div className="tech-item">
                  <div className="tech-icon">
                    <i className="bi bi-flower1"></i>
                  </div>
                  <span>Flutter</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <i className="bi bi-react"></i>
                  </div>
                  <span>React/Next.js</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">
                    <i className="bi bi-node-plus"></i>
                  </div>
                  <span>Node.js</span>
                </div>
              </div>

              <div className="row g-4 mt-2">
                <div className="col-md-6">
                  <div className="skill-card premium-card">
                    <div className="card-icon">
                      <i className="bi bi-phone"></i>
                    </div>
                    <h5 className="card-title">Mobile Development</h5>
                    <p className="card-text">
                      Flutter, Dart, Native iOS/Android
                    </p>
                    <div className="card-glow"></div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="skill-card premium-card">
                    <div className="card-icon">
                      <i className="bi bi-laptop"></i>
                    </div>
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      Next.js, React, Node.js, HTML, CSS, JavaScript
                    </p>
                    <div className="card-glow"></div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT IMAGE - Properly aligned */}
          <div className="col-lg-5 col-xl-5">
            <div className="image-container">
              <div className="image-wrapper">
                <Image
                  src="/office.png"
                  alt="Developers collaborating in a modern office workspace"
                  width={550}
                  height={450}
                  className="premium-image"
                  priority
                />
                {/* Floating elements around image */}
                <div className="floating-element code-element">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="floating-element design-element">
                  <i className="bi bi-palette"></i>
                </div>
                <div className="floating-element rocket-element">
                  <i className="bi bi-rocket"></i>
                </div>

                {/* Image frame decoration */}
                <div className="image-frame"></div>
                <div className="image-glow"></div>
              </div>

              {/* Experience badge */}
              <div className="experience-floating-badge">
                <div className="badge-content">
                  <i className="bi bi-award"></i>
                  <span>2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
