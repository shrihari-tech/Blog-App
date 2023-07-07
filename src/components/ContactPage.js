// ContactPage.js

import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
       <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or suggestions? We would love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
