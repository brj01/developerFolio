import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  return (
    <footer className="contact-footer">
      <h2 className="contact-title">{contactInfo.title}</h2>
      <p className="contact-subtitle">{contactInfo.subtitle}</p>

      {contactInfo.number && (
        <p className="contact-item">
          📞 <a href={`tel:${contactInfo.number}`}>{contactInfo.number}</a>
        </p>
      )}

      {contactInfo.email_address && (
        <p className="contact-item">
          📧 <a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a>
        </p>
      )}

      <div className="social-section">
        <SocialMedia />
      </div>
    </footer>
  );
}
