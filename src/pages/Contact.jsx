import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="contact event">
        <h2>Contact Information</h2>
        <p>
          Have questions or want to get involved? Contact us through the details
          below or fill out the form.
        </p>
        <ul>
          <li>
            <strong>Address:</strong> 94 Kanke Block - Ranchi, JH 834006
          </li>
          <li>
            <strong>Phone:</strong> (+91) 8462 32 8978
          </li>
          <li>
            <strong>Email:</strong> contact@foodaid.org
          </li>
          <li>
            <strong>Hours:</strong> 9:00 AM - 6:00 PM
          </li>
        </ul>
      </div>

      <div className="contact-form event">
        <h2>Get In Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn send-message">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
