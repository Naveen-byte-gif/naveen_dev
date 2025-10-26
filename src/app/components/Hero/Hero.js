"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    gsap.to(heroRef.current, {
      backgroundPosition: "120% 0%",
      duration: 15,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    const textLines = textRef.current.querySelectorAll("h1, p, .btn");
    gsap.from(textLines, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.to(imgRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate bubbles smoothly with GSAP (random 3D floating)
    bubblesRef.current.forEach((bubble, i) => {
      function floatBubble() {
        const x = gsap.utils.random(-20, 20);
        const y = gsap.utils.random(-20, 20);
        const z = gsap.utils.random(-20, 20);
        const scale = gsap.utils.random(0.9, 1.1);
        const duration = gsap.utils.random(8, 15);

        gsap.to(bubble, {
          x,
          y,
          z,
          scale,
          duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          onComplete: floatBubble,
        });
      }
      floatBubble();
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero d-flex align-items-center text-white position-relative"
      aria-label="Hero Section"
    >
      {/* Floating bubbles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`bubble bubble-${i + 1}`}
          ref={(el) => (bubblesRef.current[i] = el)}
        ></div>
      ))}

      <div className="container py-5">
        <div className="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
          {/* LEFT CONTENT */}
          <div
            className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0"
            ref={textRef}
          >
            <h1 className="fw-bold display-4 mb-3">
              Hi, I'm <span className="text-info-name">Tungana Naveen</span>
            </h1>

            <p className="fs-5 mb-3">
              <strong>Full Stack Developer</strong> specializing in{" "}
              <span className="text-info-development">
                Mobile & web development.
              </span>{" "}
              I build mobile apps and web applications with clean, responsive
              UI.
            </p>

            <p className="fs-6 text-white">
              <i className="bi bi-person-badge text-white"></i> 1+ Years of
              Experience
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
              <a
                href="#portfolio"
                className="btn btn-info text-white fw-semibold px-4 py-2 view-Portfolio"
                aria-label="View Portfolio"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light fw-semibold px-4 py-2"
                aria-label="Contact Me"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 text-center position-relative mb-4 mb-lg-0">
            <div
              className="rounded-circle mx-auto shadow-lg overflow-hidden hero-img-wrapper"
              ref={imgRef}
            >
              <Image
                src="/profile.jpg"
                alt="Tungana Naveen - Full Stack Developer"
                width={280}
                height={280}
                className="object-fit-cover"
                priority
              />
            </div>

            <div
              className="badge bg-info text-dark position-absolute fw-semibold"
              style={{
                top: "10%",
                right: "0%",
                padding: "10px 16px",
                borderRadius: "12px",
                fontSize: "0.95rem",
              }}
            >
              <i className="bi bi-person-badge me-2"></i>1+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
