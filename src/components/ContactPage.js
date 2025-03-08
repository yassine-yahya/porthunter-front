import React from 'react';

const ContactPage = () => {
  return (
    <section className="contact-section" id='Contact'>
      <h1>Contact Us</h1>
      <p>If you have any questions or need further assistance, feel free to reach out to us!</p>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> yassineyahya-educ@gmail.com</p>
        <p><strong>Address:</strong> Barcelona, Spain</p>

        <h2>Follow Us</h2>
        <p>Stay connected with us through our social media channels:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/yassineyahya/" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a></li>
        </ul>
      </div>
    </section>
  );
};

export default ContactPage;
