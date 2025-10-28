"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cubesRef = useRef([]);
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

      // Cube cards animation with stagger
      cubesRef.current.forEach((cube, index) => {
        gsap.fromTo(
          cube,
          {
            opacity: 0,
            y: 100,
            rotationY: -45,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cube,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating particles animation
      particlesRef.current.forEach((particle, index) => {
        gsap.to(particle, {
          y: gsap.utils.random(-50, 50),
          x: gsap.utils.random(-40, 40),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });

      // Continuous subtle floating for cubes
      cubesRef.current.forEach((cube, index) => {
        gsap.to(cube, {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      // Magnetic hover effect for cubes
      cubesRef.current.forEach((cube) => {
        const cubeInner = cube.querySelector(".premium-cube-inner");

        cube.addEventListener("mousemove", (e) => {
          const rect = cube.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(cube, {
            x: (x - rect.width / 2) * 0.1,
            y: (y - rect.height / 2) * 0.1,
            rotationY: (x - rect.width / 2) * 0.05,
            rotationX: -(y - rect.height / 2) * 0.05,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        cube.addEventListener("mouseleave", () => {
          gsap.to(cube, {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)",
          });

          // Reset cube rotation if not flipped
          if (!cube.classList.contains("is-flipped")) {
            gsap.to(cubeInner, {
              rotationY: 0,
              duration: 0.7,
              ease: "elastic.out(1, 0.5)",
            });
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleCubeClick = (index) => {
    const cube = cubesRef.current[index];
    const cubeInner = cube.querySelector(".premium-cube-inner");

    if (cube.classList.contains("is-flipped")) {
      cube.classList.remove("is-flipped");
      gsap.to(cubeInner, {
        rotationY: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    } else {
      cube.classList.add("is-flipped");
      gsap.to(cubeInner, {
        rotationY: 180,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }
  };

  return (
    <section
      id="services"
      className="services-section position-relative overflow-hidden"
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
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="service-particle"
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="container py-6 position-relative z-2">
        {/* Section Header */}
        <header className="text-center mb-6">
          <div className="section-header">
            <h2 className="section-title gradient-text" ref={titleRef}>
              Premium Services
            </h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle" ref={subtitleRef}>
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
                className="premium-cube-card"
                ref={(el) => (cubesRef.current[index] = el)}
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
