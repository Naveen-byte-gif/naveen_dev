"use client";
import React from "react";
import "./Skills.css";

const skills = [
  {
    title: "Mobile Development",
    icon: "📱",
    tech: "React Native, Flutter, Dart, iOS, Android",
  },
  {
    title: "Web Development",
    icon: "💻",
    tech: "Next.js, React, HTML, CSS, JS, BootStrap",
  },
  {
    title: "Backend",
    icon: "🖥️",
    tech: "Node.js, Firebase, REST APIs",
  },
  {
    title: "Database",
    icon: "🗄️",
    tech: "MongoDB, SQLite, Hive, SQL",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center section-title">Technical Skills</h2>
        <p className="text-center mb-5 section-subtitle">
          I leverage a range of technologies to turn ideas into reality,
          building robust and scalable solutions from mobile apps to backend
          systems, while continuously learning and adapting to deliver modern,
          efficient software.{" "}
        </p>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-3 d-flex" key={index}>
              <div className="skill-card text-center p-4 bg-white shadow-sm rounded w-100 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="icon">{skill.icon}</div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-tech">{skill.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
