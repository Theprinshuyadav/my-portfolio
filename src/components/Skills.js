import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Beginner" },
    { name: "Git", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
    { name: "Node.js", level: "Beginner" },
  ];

  return (
    <div className="section" id="skills">
      <h2>Skills & Technologies</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{"</>"}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}