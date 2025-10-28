"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ContactUs.css";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);
  const socialLinksRef = useRef([]);
  const floatingElementsRef = useRef([]);

  const contactInfo = [
    {
      icon: "bi-geo-alt-fill",
      title: "Location",
      content: "Hyderabad, Telangana, India",
      subcontent: "Remote & On-site Collaboration",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
      animation: "float1",
      delay: 0,
    },
    {
      icon: "bi-telephone-fill",
      title: "Phone & Email",
      content: "+91 8106651649",
      subcontent: "tungananaveenjob18@gmail.com",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f5576c",
      animation: "float2",
      delay: 0.2,
    },
    {
      icon: "bi-globe",
      title: "Availability",
      content: "24/7 Available",
      subcontent: "Global Reach, Local Impact",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe",
      animation: "float3",
      delay: 0.4,
    },
  ];

  const socialLinks = [
    { icon: "bi-github", name: "GitHub", url: "#", color: "#6e5494" },
    { icon: "bi-linkedin", name: "LinkedIn", url: "#", color: "#0077b5" },
    { icon: "bi-twitter", name: "Twitter", url: "#", color: "#1da1f2" },
    { icon: "bi-instagram", name: "Instagram", url: "#", color: "#e4405f" },
    {
      icon: "bi-envelope-fill",
      name: "Email",
      url: "mailto:tungananaveenjob18@gmail.com",
      color: "#ea4335",
    },
  ];

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

      // Contact cards animation with 3D effects
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotationY: -25,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
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

      // Social links animation
      socialLinksRef.current.forEach((link, index) => {
        gsap.fromTo(
          link,
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 1 + index * 0.1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: link,
              start: "top 90%",
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

      // Floating elements animation
      floatingElementsRef.current.forEach((element, index) => {
        gsap.to(element, {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          rotation: gsap.utils.random(-45, 45),
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
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });

      // Magnetic hover effect for cards
      cardsRef.current.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(card, {
            x: (x - rect.width / 2) * 0.15,
            y: (y - rect.height / 2) * 0.15,
            rotationY: (x - rect.width / 2) * 0.03,
            rotationX: -(y - rect.height / 2) * 0.03,
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

      // Hover effects for social links
      socialLinksRef.current.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            scale: 1.2,
            y: -10,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleContactAction = () => {
    switch (type) {
      case "phone":
        window.open(`tel:${value}`, "_self");
        break;
      case "email":
        window.open(`mailto:${value}`, "_self");
        break;
      case "location":
        // Open maps or location
        console.log("Location:", value);
        break;
    }
  };

  return (
    <section
      id="contact"
      className="contact-section position-relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        {/* Connection Network */}
        <div className="connection-network">
          <div className="network-node node-1"></div>
          <div className="network-node node-2"></div>
          <div className="network-node node-3"></div>
          <div className="network-line line-1"></div>
          <div className="network-line line-2"></div>
          <div className="network-line line-3"></div>
        </div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="contact-particle"
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
          ></div>
        ))}

        {/* Floating Tech Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`floating-${i}`}
            className="floating-element"
            ref={(el) => (floatingElementsRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 3 === 0 ? "⚡" : i % 3 === 1 ? "🚀" : "💫"}
          </div>
        ))}
      </div>

      <div className="container py-6 position-relative z-2">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="section-header">
            <h2 className="section-title gradient-text" ref={titleRef}>
              Let's Create Magic
            </h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle" ref={subtitleRef}>
            Ready to bring your ideas to life? Let's build something
            extraordinary together.
            <span className="availability-badge">
              <i className="bi bi-lightning-charge-fill me-2"></i>
              Available 24/7
            </span>
          </p>
        </div>

        {/* Premium Contact Cards */}
        <div className="row g-4 mb-6 justify-content-center">
          {contactInfo.map((info, index) => (
            <div className="col-md-4 col-lg-4" key={index}>
              <div
                className="premium-contact-card"
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  "--card-gradient": info.gradient,
                  "--card-color": info.color,
                  "--animation-delay": `${info.delay}s`,
                }}
                onClick={() =>
                  handleContactAction(
                    info.icon.includes("telephone")
                      ? "phone"
                      : info.icon.includes("envelope")
                      ? "email"
                      : "location",
                    info.content
                  )
                }
              >
                {/* Card Glow Effect */}
                <div className="card-glow"></div>

                {/* Animated Background Pattern */}
                <div className="card-pattern"></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Animated Icon Container */}
                  <div className="icon-container">
                    <div className="icon-orb">
                      <i className={`bi ${info.icon}`}></i>
                    </div>
                    <div className="icon-aura"></div>
                    <div className="pulse-ring"></div>
                  </div>

                  {/* Info Content */}
                  <div className="info-content">
                    <h3 className="info-title">{info.title}</h3>
                    <p className="info-main">{info.content}</p>
                    <p className="info-sub">{info.subcontent}</p>
                  </div>

                  {/* Action Indicator */}
                  <div className="action-indicator">
                    <div className="indicator-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="indicator-text">Click to Connect</span>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="animated-border"></div>

                {/* Corner Decorations */}
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section text-center mb-6">
          <div className="cta-container">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Start Your Project?</h3>
              <p className="cta-subtitle">
                Let's discuss your vision and turn it into reality with
                cutting-edge technology
              </p>
              <div className="cta-buttons">
                <a href="tel:+918106651649" className="cta-btn primary">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Now
                </a>
                <a
                  href="mailto:tungananaveenjob18@gmail.com"
                  className="cta-btn secondary"
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Send Email
                </a>
              </div>
            </div>
            <div className="cta-glow"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section text-center">
          <h4 className="social-title mb-4">Connect With Me</h4>
          <p className="social-subtitle mb-5">
            Follow my journey and stay updated with the latest projects
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link"
                ref={(el) => (socialLinksRef.current[index] = el)}
                style={{ "--social-color": social.color }}
              >
                <div className="social-icon">
                  <i className={`bi ${social.icon}`}></i>
                </div>
                <div className="social-glow"></div>
                <span className="social-tooltip">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Floating Contact Bubble */}
        <div className="floating-contact-bubble">
          <div className="bubble-content">
            <i className="bi bi-chat-dots-fill"></i>
          </div>
          <div className="bubble-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
