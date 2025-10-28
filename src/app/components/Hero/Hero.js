"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const bubblesRef = useRef([]);
  const titleRef = useRef(null);
  const particlesRef = useRef([]);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Animated gradient background
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% 200%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // Premium text reveal animation with typewriter effect
    const title = titleRef.current;
    gsap.to(title, {
      duration: 2,
      text: {
        value: "Hi, I'm Tungana Naveen",
        delimiter: "",
      },
      ease: "power2.inOut",
      delay: 0.5,
    });

    // Floating image with 3D rotation
    const imgTl = gsap.timeline({ repeat: -1, yoyo: true });
    imgTl
      .to(imgRef.current, {
        y: -20,
        rotationY: 5,
        rotationX: 5,
        duration: 4,
        ease: "sine.inOut",
      })
      .to(imgRef.current, {
        y: 0,
        rotationY: -5,
        rotationX: -5,
        duration: 4,
        ease: "sine.inOut",
      });

    // Text content stagger animation
    const textLines = textRef.current.querySelectorAll("p, .btn, .badge");
    gsap.from(textLines, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.3,
      ease: "back.out(1.7)",
      delay: 2,
    });

    // Advanced bubble animations with physics
    bubblesRef.current.forEach((bubble, i) => {
      const timeline = gsap.timeline({ repeat: -1, yoyo: true });

      timeline
        .to(bubble, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-80, 80),
          rotation: gsap.utils.random(-180, 180),
          scale: gsap.utils.random(0.8, 1.2),
          duration: gsap.utils.random(10, 20),
          ease: "sine.inOut",
        })
        .to(bubble, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-80, 80),
          rotation: gsap.utils.random(-180, 180),
          scale: gsap.utils.random(0.8, 1.2),
          duration: gsap.utils.random(10, 20),
          ease: "sine.inOut",
        });
    });

    // Premium particle system
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: gsap.utils.random(-500, 500),
        y: gsap.utils.random(-300, 300),
        rotation: gsap.utils.random(0, 360),
        opacity: gsap.utils.random(0.1, 0.4),
        duration: gsap.utils.random(15, 25),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.5,
      });
    });

    // Magnetic button effect
    const buttons = document.querySelectorAll(".magnetic-btn");
    buttons.forEach((button) => {
      button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
          x: (x - rect.width / 2) * 0.2,
          y: (y - rect.height / 2) * 0.2,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });

    // Scroll-triggered animations
    gsap.to(heroRef.current, {
      opacity: 0.8,
      scale: 0.95,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom bottom",
        end: "+=100",
        scrub: 1,
      },
    });

    return () => {
      // Cleanup
      buttons.forEach((button) => {
        button.removeEventListener("mousemove", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero d-flex align-items-center text-white position-relative overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Animated Gradient Background */}
      <div ref={gradientRef} className="hero-gradient"></div>

      {/* Premium Particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          ref={(el) => (particlesRef.current[i] = el)}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
          }}
        ></div>
      ))}

      {/* Luxury Glass Morphism Bubbles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`bubble bubble-${i + 1} glass-bubble`}
          ref={(el) => (bubblesRef.current[i] = el)}
        ></div>
      ))}

      {/* Animated Orb */}
      <div className="floating-orb"></div>

      <div className="container py-5 position-relative z-2">
        <div className="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <div ref={textRef}>
              <h1
                ref={titleRef}
                className="fw-bold display-3 mb-3 premium-title"
              >
                {/* Text will be populated by GSAP */}
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
                  className="btn btn-premium primary-btn magnetic-btn px-5 py-3"
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
                  className="btn btn-outline-premium secondary-btn magnetic-btn px-5 py-3"
                  aria-label="Contact Me"
                >
                  <span className="btn-content">
                    <i className="bi bi-send me-2"></i>
                    Contact Me
                  </span>
                </a>
              </div>

              {/* Stats Bar */}
              {/* <div className="stats-bar mt-5">
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 text-center position-relative mb-4 mb-lg-0">
            <div className="image-container">
              <div className="premium-image-wrapper mx-auto" ref={imgRef}>
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
