import React from 'react';
import '../App.css';  // Import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 id="about">About Us</h1>
      <p>
        Welcome to PortHunter. We are dedicated to providing specific service, your privacy 
        and security are our top priority.
      </p>
      <p>
        we invite you to use our services only on devices you own or have explicit permission to scan. Unauthorized scanning is illegal.
      </p>
      <p>
        We do not collect any personal data, and your privacy is important to us.
        Note: Other threats like SQL Injection or XSS may exist.
      </p>
    </div>
  );
};

export default About;
