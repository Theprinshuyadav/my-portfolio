import React from "react";
import myphoto from "../image/myphoto.jpg"; // 👈 yaha change kiya

export default function Hero() {
  return (
    <div className="hero section">
      <div className="hero-text">
        <p>Hi there, I'm</p>
        <h1>Prinshu Yadav</h1>
        <h2>CSE Student & Front-End Developer</h2>

        <p>
          I am a second-year Computer Science Engineering student at ABES
          Engineering College. I love building modern and responsive websites.
        </p>

        <button className="btn">Get In Touch</button>
      </div>

      {/* 👇 Image */}
      <div>
        <img src={myphoto} alt="profile" className="profile-img" />
      </div>
    </div>
  );
}