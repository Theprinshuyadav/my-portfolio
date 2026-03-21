import React from "react";

export default function About() {
  return (
    <div className="section about-section" id="about">
      <h2>About Me</h2>

      <div className="about-container">
        {/* Left Text */}
        <div className="about-text">
          <p>
            I'm a second-year Computer Science Engineering student at ABES
            Engineering College, Ghaziabad. My journey in technology started
            with curiosity and has evolved into a passion for creating impactful
            digital solutions.
          </p>

          <p>
            I specialize in front-end development, with hands-on experience in
            HTML, CSS, JavaScript, and React.
          </p>
        </div>

        {/* Right Cards */}
        <div className="about-cards">
          <div className="about-card active">
            <div className="icon-box"></div>
            <div>
              <h3>Learning Journey</h3>
              <p>
                Constantly exploring new technologies and frameworks to expand
                my skill set.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="icon-box"></div>
            <div>
              <h3>Problem Solver</h3>
              <p>
                Enjoy tackling complex problems and finding elegant solutions.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="icon-box"></div>
            <div>
              <h3>Team Player</h3>
              <p>
                Believe in collaborative development and learning from peers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}