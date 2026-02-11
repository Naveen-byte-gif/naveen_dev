"use client";

import React, { useState } from "react";
import styles from "./digital-marketing.module.css";

function calculatePrice(formData) {
  let basePrice = 5000;

  if (formData.website === "upgrade") basePrice += 1000;
  if (formData.hosting === "none") basePrice += 2000;
  if (formData.industry === "ecommerce") basePrice += 3000;

  return basePrice;
}

export default function DigitalMarketingLandingPageClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formSubmitting) return;

    const form = e.currentTarget;

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      businessName: form.businessName.value.trim(),
      industry: form.industry.value,
      timeline: form.timeline.value,
      message: form.message.value.trim(),
      business: form.business.value,
      website: form.website.value,
      hosting: form.hosting.value,
    };

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    if (!formData.business || !formData.website || !formData.hosting) {
      alert("Please answer all assessment questions.");
      return;
    }

    setFormSubmitting(true);

    const estimatedPrice = calculatePrice(formData);

    setTimeout(() => {
      alert(
        `Thank you ${formData.name}! Your quote request has been received.\n\nWe will contact you within 24 hours at ${formData.phone} with your personalized quote.\n\nEstimated Price: ₹${estimatedPrice}`,
      );

      form.reset();
      setFormSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${styles.navbarCustom}`}>
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <i className="fas fa-code me-2" />
            <span className={styles.logoText}>SmartWeb</span>
          </div>

          <div
            className={`${styles.navLinks} ${
              menuOpen ? styles.navLinksActive : ""
            }`}
          >
            <a href="#benefits" onClick={(e) => handleNavClick(e, "#benefits")}>
              Benefits
            </a>
            <a
              href="#comparison"
              onClick={(e) => handleNavClick(e, "#comparison")}
            >
              Comparison
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "#testimonials")}
            >
              Reviews
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>
              FAQs
            </a>
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Quote
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className={styles.menuToggle}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container d-flex flex-column flex-lg-row align-items-center gap-4 py-5">
          <div className="flex-grow-1">
            <div className={styles.badge}>
              <i className="fas fa-rupee-sign me-1" /> Save 70%
            </div>
            <h1 className="fw-bold">
              Stop Overpaying Money to Companies and Agencies for Websites
            </h1>
            <p className={styles.heroSubtitle}>
              Most companies and agencies overcharge ₹15,000-₹50,000 per
              website. You don&apos;t need a ₹15,000-50,000 website to start
              business. Get the same professional quality website for{" "}
              <strong>70% less</strong>.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <h3>₹5,000</h3>
                <p>Starting Price</p>
              </div>
              <div className={styles.stat}>
                <h3>10-14 Days</h3>
                <p>Delivery Time</p>
              </div>
              <div className={styles.stat}>
                <h3>50+</h3>
                <p>Websites Built</p>
              </div>
            </div>

            <button
              type="button"
              className={styles.btnPrimary}
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Your Website <i className="fas fa-arrow-right ms-1" />
            </button>
          </div>

          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
              alt="Website Development"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits} id="benefits">
        <div className="container py-5">
          <h2>What You Will Get</h2>
          <p className={styles.sectionSubtitle}>
            Premium features without the premium price tag
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fab fa-react" />
              </div>
              <h3>Advanced Tech Stack</h3>
              <p>
                Built with React, TypeScript &amp; Node.js - modern, fast, and
                scalable
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-layer-group" />
              </div>
              <h3>No Page Limits</h3>
              <p>Add unlimited pages, blogs, products - no extra charges</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-chart-line" />
              </div>
              <h3>SEO Optimized</h3>
              <p>
                Ready to rank on Google from day one with best practices built
                in
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-headset" />
              </div>
              <h3>Lifetime Support</h3>
              <p>24/7 assistance, bug fixes, and updates included forever</p>
            </div>

            <div className={`${styles.benefitCard} ${styles.highlight}`}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-percentage" />
              </div>
              <h3>70% Price Less</h3>
              <p>
                Premium quality at just ₹5,000 instead of ₹15,000-50,000+ for
                agencies
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-rocket" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Your website live in 10-14 days, not months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparison} id="comparison">
        <div className="container py-5">
          <h2>Smart Investment vs Overpaying</h2>
          <p className={styles.sectionSubtitle}>
            See how much you can save with our transparent pricing
          </p>

          <div className={styles.comparisonContainer}>
            <div
              className={`${styles.comparisonCard} ${styles.ourSolutionCard}`}
            >
              <div className={styles.comparisonHeader}>
                <h3>Our Solution</h3>
                <div className={styles.price}>₹5,000</div>
              </div>
              <ul className={styles.featuresList}>
                <li>
                  <i className="fas fa-check-circle" /> React + TypeScript +
                  Node.js
                </li>
                <li>
                  <i className="fas fa-check-circle" /> Unlimited pages included
                </li>
                <li>
                  <i className="fas fa-check-circle" /> Lifetime support
                </li>
                <li>
                  <i className="fas fa-check-circle" /> SEO optimized
                </li>
                <li>
                  <i className="fas fa-check-circle" /> 10-14 day delivery
                </li>
                <li>
                  <i className="fas fa-check-circle" /> Transparent pricing
                </li>
              </ul>
            </div>

            <div className={styles.vsCircle}>
              <span>VS</span>
            </div>

            <div
              className={`${styles.comparisonCard} ${styles.theirSolutionCard}`}
            >
              <div className={styles.comparisonHeader}>
                <h3>Typical Agencies</h3>
                <div className={styles.price}>₹15,000-50,000+</div>
              </div>
              <ul className={styles.featuresList}>
                <li>
                  <i className="fas fa-times-circle" /> Often outdated
                  technology
                </li>
                <li>
                  <i className="fas fa-times-circle" /> Page-based extra charges
                </li>
                <li>
                  <i className="fas fa-times-circle" /> Monthly/annual fees
                </li>
                <li>
                  <i className="fas fa-times-circle" /> SEO as expensive add-on
                </li>
                <li>
                  <i className="fas fa-times-circle" /> 1-3 month timelines
                </li>
                <li>
                  <i className="fas fa-times-circle" /> Hidden costs &amp;
                  charges
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.savingsBanner}>
            <div className={styles.savingsContent}>
              <i className="fas fa-piggy-bank" />
              <div>
                <h3>You Save: ₹10,000 - ₹45,000+ on every website!</h3>
                <p>That&apos;s money you can invest back into your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials} id="testimonials">
        <div className="container py-5">
          <h2>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>
            Join 50+ satisfied business owners
          </p>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <i className="fas fa-quote-left" />
                <p>
                  &quot;Paid ₹45,000 elsewhere last year, got same quality here
                  for just ₹5,000! The website looks professional and loads
                  super fast.&quot;
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div>
                  <h4>Raj Patel</h4>
                  <p>Restaurant Owner, Mumbai</p>
                </div>
                <div className={styles.rating}>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <i className="fas fa-quote-left" />
                <p>
                  &quot;My business website went live in 10 days, started
                  ranking on Google in 3 weeks! Got my first online order the
                  same day we launched.&quot;
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div>
                  <h4>Priya Sharma</h4>
                  <p>Boutique Owner, Delhi</p>
                </div>
                <div className={styles.rating}>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <i className="fas fa-quote-left" />
                <p>
                  &quot;Lifetime support is real - they fixed my issues at
                  midnight! The admin panel is so easy to use, I update products
                  myself now.&quot;
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div>
                  <h4>Arun Kumar</h4>
                  <p>Electronics Store, Bangalore</p>
                </div>
                <div className={styles.rating}>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.socialProofStats}>
            <div>
              <h3>50+</h3>
              <p>Businesses Launched</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div>
              <h3>₹2.5L+</h3>
              <p>Total Client Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq} id="faq">
        <div className="container py-5">
          <h2>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know before getting started
          </p>

          <div className={styles.faqContainer}>
            {[
              {
                q: "How can you charge so much less than others?",
                a: "We've streamlined the development process, eliminated agency overheads, and use modern tools that reduce development time without compromising quality. We focus on efficient delivery rather than expensive office spaces and sales teams.",
              },
              {
                q: "Is this suitable for e-commerce websites?",
                a: "Absolutely! We build complete e-commerce solutions with payment gateway integration (Razorpay, Stripe), inventory management, order tracking, and all essential features. E-commerce websites start at ₹8,000.",
              },
              {
                q: 'What exactly does "lifetime support" include?',
                a: "Lifetime support includes free bug fixes, security updates, basic content changes, and technical assistance via WhatsApp/email. Major redesigns or feature additions are charged minimally based on requirements.",
              },
              {
                q: "How long does it take to build my website?",
                a: "Typically 10-14 days from confirmation to launch. Simple websites can be ready in 7 days, while complex e-commerce sites may take up to 3 weeks. We provide a detailed timeline before starting.",
              },
              {
                q: "Can I update content myself after delivery?",
                a: "Yes! We provide an easy-to-use admin panel where you can update text, images, products, blogs, and pages without any technical knowledge. We also provide video tutorials.",
              },
              {
                q: "Do you provide hosting and domain?",
                a: "We can help you purchase domain and hosting (additional cost ~₹2,000/year) or you can use your existing hosting. We handle all technical setup regardless of your choice.",
              },
            ].map((item, index) => (
              <div className={styles.faqItem} key={item.q}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.q}</span>
                  <i
                    className={`fas fa-chevron-down ${
                      activeFaq === index ? styles.iconRotated : ""
                    }`}
                  />
                </button>
                <div
                  className={`${styles.faqAnswer} ${
                    activeFaq === index ? styles.faqAnswerOpen : ""
                  }`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <div className="container py-5">
          <div className={styles.contactContainer}>
            <div className={styles.contactForm}>
              <h3 className="d-flex align-items-center justify-content-between">
                <span>Quick Assessment Form</span>
                <i className="fas fa-chevron-down text-muted" />
              </h3>
              <p>Answer these questions to get a personalized quote</p>

              <form id="websiteQuoteForm" onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>
                    1. Do you have a business or are planning to start one?
                  </label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioOption}>
                      <input
                        type="radio"
                        name="business"
                        value="existing"
                        required
                      />
                      <span>Yes, I have an existing business</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="business" value="planning" />
                      <span>Yes, I&apos;m planning to start soon</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="business" value="exploring" />
                      <span>No, just exploring options</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>2. Do you already have an existing website?</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioOption}>
                      <input
                        type="radio"
                        name="website"
                        value="upgrade"
                        required
                      />
                      <span>Yes, but I want to upgrade/replace it</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="website" value="new" />
                      <span>No, I need a completely new website</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="website" value="notsure" />
                      <span>Not sure</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>3. Do you have domain &amp; hosting?</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioOption}>
                      <input
                        type="radio"
                        name="hosting"
                        value="both"
                        required
                      />
                      <span>Yes, I have both</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="hosting" value="domain" />
                      <span>I have only domain</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="hosting" value="hosting" />
                      <span>I have only hosting</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="hosting" value="none" />
                      <span>No, I need help with both</span>
                    </label>
                    <label className={styles.radioOption}>
                      <input type="radio" name="hosting" value="unknown" />
                      <span>Not sure what this means</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Your Name *</label>
                    <input type="text" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address *</label>
                    <input type="email" name="email" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Business Name</label>
                    <input type="text" name="businessName" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Industry</label>
                    <select name="industry" defaultValue="">
                      <option value="">Select your industry</option>
                      <option value="retail">Retail/Shop</option>
                      <option value="restaurant">Restaurant/Food</option>
                      <option value="service">Service Business</option>
                      <option value="consulting">Consulting</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Desired Launch Timeline</label>
                    <select name="timeline" defaultValue="">
                      <option value="">Select timeline</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Tell us about your website needs (optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe what you want in your website..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.btnSubmit}
                  disabled={formSubmitting}
                >
                  {formSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin me-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Get Free Consultation &amp; Quote
                      <i className="fas fa-paper-plane ms-2" />
                    </>
                  )}
                </button>

                <p className={styles.formNote}>
                  *Money-back guarantee applies if we fail to deliver as per
                  agreed timeline and specifications
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container py-4">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <i className="fas fa-code" />
              <span>SmartWeb</span>
              <p>Professional websites without the agency price tag</p>
            </div>

            <div>
              <h4 className={styles.footerHeading}>Quick Links</h4>
              <div className={styles.footerLinks}>
                <a
                  href="#benefits"
                  onClick={(e) => handleNavClick(e, "#benefits")}
                >
                  Benefits
                </a>
                <a
                  href="#comparison"
                  onClick={(e) => handleNavClick(e, "#comparison")}
                >
                  Comparison
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, "#testimonials")}
                >
                  Reviews
                </a>
                <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>
                  FAQs
                </a>
              </div>
            </div>

            <div className={styles.footerContact}>
              <h4 className={styles.footerHeading}>Contact Us</h4>
              <p>
                <i className="fas fa-phone-alt" /> +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope" /> hello@smartweb.com
              </p>
              <p>
                <i className="fas fa-clock" /> Support: 24/7 via WhatsApp
              </p>
            </div>

            <div className={styles.footerCta}>
              <p className={styles.footerTagline}>
                Stop overpaying. Start smart.
              </p>
              <button
                type="button"
                className={styles.btnFooter}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get Your Website Today
              </button>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2024 SmartWeb Solutions. All rights reserved.</p>
            <p>
              Get your professional website for <strong>₹5,000</strong> with all
              premium features included.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
