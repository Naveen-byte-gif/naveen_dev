"use client";
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted fs-5">
            Get in touch for freelance work, collaborations, or just a quick
            tech chat.
            <span className="badge bg-success ms-2">Available 24/7</span>
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="row g-4">
          {/* Location */}
          <div className="col-md-4">
            <div className="bg-white p-4 shadow-sm rounded h-100">
              <div className="mb-3 text-primary fs-3">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h5 className="fw-semibold mb-2">Location</h5>
              <p className="text-muted mb-0">Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="col-md-4">
            <div className="bg-white p-4 shadow-sm rounded h-100">
              <div className="mb-3 text-primary fs-3">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <h5 className="fw-semibold mb-2">Phone & Email</h5>
              <p className="text-muted mb-1">📞 +91 8106651649</p>
              <p className="text-muted mb-0">✉️ tungananaveenjob18@gmail.com</p>
            </div>
          </div>

          {/* Availability */}
          <div className="col-md-4">
            <div className="bg-white p-4 shadow-sm rounded h-100">
              <div className="mb-3 text-primary fs-3">
                <i className="bi bi-globe"></i>
              </div>
              <h5 className="fw-semibold mb-2">Availability</h5>
              <p className="text-success fw-semibold mb-1">🕒 24/7 Available</p>
              <p className="text-muted mb-0">
                🌐 Reach me anytime, from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
