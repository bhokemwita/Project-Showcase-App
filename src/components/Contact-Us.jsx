import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          {/* Contact Information Cards */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Innovation Drive<br />Tech Valley, CA 94025</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>hello@company.com<br />support@company.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Hours</h3>
              <p>Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {isSubmitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9668094602827!2d-74.00601568459422!3d40.71277677933031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bed4b0b%3A0xbf018c39301b87a3!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645456789012!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a192f 0%, #0b2b3b 100%);
          padding: 60px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .contact-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-header h1 {
          font-size: 48px;
          color: #00e5ff;
          margin-bottom: 15px;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(0, 229, 255, 0.3);
        }

        .contact-header p {
          font-size: 18px;
          color: #b0d4e8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 50px;
        }

        .info-card {
          background: rgba(10, 25, 47, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: 15px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: #00e5ff;
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.2);
        }

        .info-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .info-card h3 {
          color: #00e5ff;
          font-size: 20px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .info-card p {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        .contact-form-wrapper {
          background: rgba(10, 25, 47, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(0, 229, 255, 0.3);
          margin-bottom: 50px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #00e5ff;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(15, 35, 55, 0.8);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: 10px;
          padding: 12px 16px;
          color: #ffffff;
          font-size: 16px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00e5ff;
          box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #5a7d9a;
        }

        .submit-btn {
          background: linear-gradient(135deg, #00e5ff 0%, #0088cc 100%);
          color: #0a192f;
          border: none;
          padding: 14px 30px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 10px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 229, 255, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .success-message {
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid #00e5ff;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
          color: #00e5ff;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .map-section {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0, 229, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .map-section iframe {
          width: 100%;
          height: 350px;
          border: 0;
          display: block;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-container {
            padding: 40px 15px;
          }

          .contact-header h1 {
            font-size: 36px;
          }

          .contact-header p {
            font-size: 16px;
          }

          .contact-form-wrapper {
            padding: 25px;
          }

          .info-card {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .contact-header h1 {
            font-size: 28px;
          }

          .submit-btn {
            width: 100%;
          }

          .map-section iframe {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;