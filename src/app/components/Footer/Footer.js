"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Mobile App Development",
  "Web Development",
  "API Integration",
  "UI/UX Design",
  "App Deployment",
  "Technical Support",
];

const socialLinks = [
  {
    icon: "bi bi-linkedin",
    href: "https://www.linkedin.com/in/tungananaveen",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: "bi bi-github",
    href: "https://github.com/tungananaveen",
    label: "GitHub",
    color: "#6e5494",
  },
  {
    icon: "bi bi-twitter",
    href: "https://twitter.com/tungananaveen",
    label: "Twitter",
    color: "#1da1f2",
  },
  {
    icon: "bi bi-envelope-fill",
    href: "mailto:tungananaveenjob18@gmail.com",
    label: "Email",
    color: "#ea4335",
  },
];

const Footer = () => {
  const footerRef = useRef(null);
  const sectionsRef = useRef([]);
  const socialLinksRef = useRef([]);
  const particlesRef = useRef([]);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Sections stagger animation
      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
            rotationY: -10,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
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
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });

      // Floating elements animation
      floatingElementsRef.current.forEach((element, index) => {
        gsap.to(element, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-15, 15),
          rotation: gsap.utils.random(-45, 45),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });

      // Hover effects for social links
      socialLinksRef.current.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            scale: 1.3,
            y: -8,
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

      // Quick links hover effects
      const quickLinkElements = document.querySelectorAll(".quick-link-item");
      quickLinkElements.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            x: 10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Service items hover effects
      const serviceItems = document.querySelectorAll(".service-item");
      serviceItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="premium-footer position-relative overflow-hidden"
      ref={footerRef}
      aria-label="Site Footer"
    >
      {/* Animated Background */}
      <div className="footer-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>

        {/* Connection Waves */}
        <div className="connection-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="footer-particle"
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          ></div>
        ))}

        {/* Floating Tech Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`floating-${i}`}
            className="floating-tech-element"
            ref={(el) => (floatingElementsRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 3 === 0 ? "</>" : i % 3 === 1 ? "{ }" : "⚡"}
          </div>
        ))}
      </div>

      <div className="container position-relative z-2">
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="row text-md-start text-center">
            {/* Developer Info */}
            <div
              className="col-12 col-md-4 col-lg-3 mb-5"
              ref={(el) => (sectionsRef.current[0] = el)}
            >
              <div className="developer-info">
                <div className="developer-avatar">
                  <div className="avatar-glow"></div>
                  <div className="avatar-content">
                    <span>TN</span>
                  </div>
                </div>
                <h3 className="developer-name">Tungana Naveen</h3>
                <p className="developer-title">Full Stack Developer</p>
                <p className="developer-description">
                  Crafting exceptional digital experiences with Flutter &
                  Next.js. Transforming ideas into scalable, high-performance
                  applications.
                </p>

                {/* Stats */}
                {/* <div className="developer-stats">
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Quick Navigation */}
            <nav
              className="col-6 col-md-4 col-lg-2 mb-5"
              aria-label="Quick Navigation"
              ref={(el) => (sectionsRef.current[1] = el)}
            >
              <h4 className="section-title">Quick Links</h4>
              <ul className="nav-links">
                {quickLinks.map(({ label, href }) => (
                  <li key={label} className="quick-link-item">
                    <a href={href} className="nav-link text-white">
                      <span className="link-icon">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <section
              className="col-6 col-md-4 col-lg-3 mb-5"
              aria-label="Services"
              ref={(el) => (sectionsRef.current[2] = el)}
            >
              <h4 className="section-title">Expert Services</h4>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index} className="service-item">
                    <div className="service-icon">
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <span className="service-text">{service}</span>
                    <div className="service-glow"></div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Connect Section */}
            <section
              className="col-12 col-md-12 col-lg-4 mb-5"
              aria-label="Connect With Me"
              ref={(el) => (sectionsRef.current[3] = el)}
            >
              <div className="connect-section">
                <h4 className="section-title">Let's Build Together</h4>
                <p className="connect-description">
                  Ready to start your next project? Let's connect and create
                  something amazing.
                </p>

                {/* Contact Info */}
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-telephone-fill contact-icon"></i>
                    <div>
                      <div className="contact-label">Phone</div>
                      <div className="contact-value">+91 8106651649</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope-fill contact-icon"></i>
                    <div>
                      <div className="contact-label">Email</div>
                      <div className="contact-value">
                        tungananaveenjob18@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-section">
                  <h5 className="social-title">Follow My Journey</h5>
                  <div className="social-links">
                    {socialLinks.map(({ icon, href, label, color }, index) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="social-link"
                        ref={(el) => (socialLinksRef.current[index] = el)}
                        style={{ "--social-color": color }}
                      >
                        <div className="social-icon-wrapper">
                          <i className={icon}></i>
                        </div>
                        <div className="social-glow"></div>
                        <span className="social-tooltip">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-orb"></div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <div className="copyright">
                <span className="copyright-text">
                  &copy; {new Date().getFullYear()} Tungana Naveen. All rights
                  reserved.
                </span>
                <span className="copyright-sub">
                  Crafted with{" "}
                  <i className="bi bi-heart-fill text-danger mx-1"></i> and
                  cutting-edge technology
                </span>
              </div>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <div className="footer-actions">
                {/* <button
                  className="back-to-top-btn"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  <i className="bi bi-arrow-up"></i>
                  <span>Back to Top</span>
                </button> */}

                <div className="tech-badges">
                  <span className="tech-badge">Flutter</span>
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="floating-cta">
        <div className="cta-bubble" onClick={scrollToTop}>
          <i className="bi bi-arrow-up-short"></i>
        </div>
        <div className="cta-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
