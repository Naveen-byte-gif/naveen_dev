"use client";

import Image from "next/image";
import "./About.css";
function About() {
  return (
    <section id="about" className="py-5 bg-white" aria-label="About Me Section">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 text-dark">About Me</h2>
          <p className="text-secondary fs-5 mt-3">
            Innovative full-stack and mobile developer passionate about
            transforming ideas into user-friendly, impactful applications that
            drive business growth while continuously embracing new technologies.
          </p>
        </div>

        <div className="row align-items-center g-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <article>
              <h3 className="fw-bold text-primary mb-3">
                Professional Journey
              </h3>
              <p className="text-secondary lh-lg">
                With over <strong>1 years of experience</strong> in software
                development, I specialize in creating cross-platform mobile
                applications using <strong>Flutter</strong> and modern web
                applications with <strong>Next.js</strong>. My passion lies in
                building user-centric solutions that solve real-world problems.
              </p>

              <div className="row g-3 mt-4">
                <div className="col-md-6">
                  <div className="p-3 bg-white shadow-sm rounded-3 h-100">
                    <h5 className="text-primary fw-semibold mb-2">
                      <i className="bi bi-phone me-2"></i>Mobile Development
                    </h5>
                    <p className="text-muted mb-0">
                      Flutter, Dart, Native iOS/Android
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 bg-white shadow-sm rounded-3 h-100">
                    <h5 className="text-primary fw-semibold mb-2">
                      <i className="bi bi-terminal me-2"></i>Web Development
                    </h5>
                    <p className="text-muted mb-0">
                      Next.js, React, Node.js, HTML, CSS, JavaScript
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <figure className="m-0">
              <Image
                src="/office.png"
                alt="Developers collaborating in a modern office workspace"
                width={500}
                height={0}
                className="img-fluid rounded-4 shadow-sm object-fit-cover"
                priority
              />
              <figcaption className="visually-hidden">
                Developers working on Flutter and Next.js projects.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
