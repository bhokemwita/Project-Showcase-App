import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Decorative animated glow line */}
      <div className="footer-glow"></div>
      
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <i className="fas fa-water"></i>
              </div>
              <div className="logo-text">AquaFlow</div>
            </div>
            <p className="footer-description">
              Crafting digital experiences to enable you to shop comfortably anytime, anywhere.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-col">
            <h3>Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to receive updates when new products are launched.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="projectshowcaseapp@gmail.com" />
              <button aria-label="Subscribe">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> hello@aquaflow.dev</p>
              <p><i className="fas fa-phone-alt"></i> +254 700 123 456</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} AquaFlow. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;