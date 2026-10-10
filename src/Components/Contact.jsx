import React, { useState } from "react";
import { ArrowRightIcon } from "./Icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="home-work-header">
          <div className="editorial-border"></div>

          <div className="work-header-content">
            <h2 className="work-section-title">
              Let's <span className="muted-text">connect</span>
            </h2>
            <span className="bracket-tag desktop-only">[ Get in touch ]</span>
          </div>
        </div>

        <div className="contact-editorial-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-editorial-info">
            <div className="info-block">
              <span className="bracket-tag">[ Open ]</span>
              <p className="open-text">
                I’m always looking to meet new people, collaborate on new projects, 
                and explore new technical ideas. Feel free to say hello.
              </p>
            </div>

            <div className="info-block">
              <span className="bracket-tag">[ Direct Contact ]</span>
              <div className="direct-links-list">
                <div className="direct-link-item">
                  <span className="link-label">Email:</span>
                  <a href="mailto:purirobin18@gmail.com" className="link-line">
                    purirobin18@gmail.com
                  </a>
                </div>

                <div className="direct-link-item">
                  <span className="link-label">Phone:</span>
                  <a href="tel:+918360430635" className="link-line">
                    +91 8360430635
                  </a>
                </div>

                <div className="direct-link-item">
                  <span className="link-label">LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/robin-puri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line"
                  >
                    linkedin.com/in/robin-puri
                  </a>
                </div>

                <div className="direct-link-item">
                  <span className="link-label">Website:</span>
                  <a
                    href="https://isitrobin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line"
                  >
                    isitrobin.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="contact-editorial-form-wrap">
            {submitted ? (
              <div className="form-success-box">
                <span className="bracket-tag">[ Sent ]</span>
                <h3>Message Received</h3>
                <p>Thank you for reaching out, {formData.name}. I'll get back to you shortly.</p>
                <button
                  className="link-line"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form">
                <span className="bracket-tag">[ Write a Message ]</span>

                <div className="form-field">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Robin Puri"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about your project or offer..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn link-line">
                  <span>Send message</span>
                  <ArrowRightIcon size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
