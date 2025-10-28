"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text content animation
      const textElements = textRef.current?.querySelectorAll("p, h3") || [];
      gsap.fromTo(
        textElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          rotationY: -15,
          scale: 0.8,
          x: 100,
        },
        {
          opacity: 1,
          rotationY: 0,
          scale: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            rotationX: 45,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating particles animation
      particlesRef.current.forEach((particle, index) => {
        gsap.to(particle, {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });

      // Hover animations for cards
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="about-section position-relative overflow-hidden"
      aria-label="About Me Section"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>

        {/* Animated Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="about-particle"
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="container py-6">
        {/* Section Heading */}
        <div className="text-center mb-6" ref={headingRef}>
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
            <article className="content-wrapper" ref={textRef}>
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
                  <div
                    className="skill-card premium-card"
                    ref={(el) => (cardsRef.current[0] = el)}
                  >
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
                  <div
                    className="skill-card premium-card"
                    ref={(el) => (cardsRef.current[1] = el)}
                  >
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

              {/* Stats */}
              {/* <div className="stats-grid mt-5">
                <div className="stat-item">
                  <div className="stat-number" data-count="50">
                    0
                  </div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="2">
                    0
                  </div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="100">
                    0
                  </div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div> */}
            </article>
          </div>

          {/* RIGHT IMAGE - Properly aligned */}
          <div className="col-lg-5 col-xl-5">
            <div className="image-container" ref={imageRef}>
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
