import React from "react";

export default function Certifications() {
  return (
    <div className="section" id="certifications">
      <h2>Certifications</h2>

      <div className="about-container">
        {/* Left Text */}
        <div className="about-text">
          <p>
            I have completed certifications to strengthen my skills in front-end
            development and cybersecurity, and I continue learning new
            technologies to grow professionally.
          </p>
        </div>

        {/* Right Cards */}
        <div className="about-cards">

          {/* 1 */}
          <div className="about-card active">
            <h3>Introduction to Front-End Development</h3>
            <p>Simplilearn • February 2026</p>
          </div>

          {/* 2 */}
          <div className="about-card">
            <h3>Cyber Job Simulation</h3>
            <p>Deloitte • 2025</p>
          </div>

          {/* 3 */}
          <div className="about-card">
            <h3>Google Play Academy Certification</h3>
            <p>Google • 2025</p>
          </div>

        </div>
      </div>
    </div>
  );
}