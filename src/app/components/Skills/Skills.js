"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
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

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards animation with stagger
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            rotationY: -15,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.15,
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
          y: gsap.utils.random(-40, 40),
          x: gsap.utils.random(-30, 30),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });

      // Continuous floating animation for cards
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });

      // Magnetic hover effect
      cardsRef.current.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(card, {
            x: (x - rect.width / 2) * 0.1,
            y: (y - rect.height / 2) * 0.1,
            rotationY: (x - rect.width / 2) * 0.02,
            rotationX: -(y - rect.height / 2) * 0.02,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      className="skills-section position-relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        {/* Animated Grid */}
        <div className="animated-grid"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="skill-particle"
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="container py-6 position-relative z-2">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="section-header">
            <h2 className="section-title gradient-text" ref={titleRef}>
              Technical Expertise
            </h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle" ref={subtitleRef}>
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
                ref={(el) => (cardsRef.current[index] = el)}
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
                    {/* <span className="progress-text">Expert Level</span> */}
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

        {/* Additional Stats */}
        {/* <div className="skills-stats mt-6">
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="stat-item">
                <div className="stat-number" data-count="50">
                  0
                </div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <div className="stat-number" data-count="15">
                  0
                </div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <div className="stat-number" data-count="100">
                  0
                </div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
