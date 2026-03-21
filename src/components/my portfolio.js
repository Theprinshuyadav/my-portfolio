import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <h2 style={{ color: '#3b82f6' }}>PY</h2>
      <div className="nav-links">
        <p onClick={() => scrollTo('about')}>About</p>
        <p onClick={() => scrollTo('skills')}>Skills</p>
        <p onClick={() => scrollTo('education')}>Education</p>
        <p onClick={() => scrollTo('certifications')}>Certifications</p>
        <p onClick={() => scrollTo('contact')}>Contact</p>

      </div>
    </div>
  );
}
