import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';
import { websiteLinks } from '../config/websiteLinks';
import { contactInfo, socialLinks, navigationLinks } from '../data/landingData';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer id="footer" className="footer-wrapper">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <img
                src="/assets/EduPyramidsLogo.png"
                alt="EduPyramids Logo"
                className="footer-logo-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement.querySelector('.footer-logo-fallback');
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <span className="footer-logo-fallback" style={{ display: 'none' }}>
                <span className="logo-accent">Edu</span>Pyramids
              </span>
            </div>

            <p className="footer-brand-text">
              Transforming foundational education, collegiate industry readiness, and community health literacy through integrated, accessible solutions.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  <img
                    src={social.iconSrc}
                    alt={social.name}
                    className="footer-social-icon-img"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals Direct Portals */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Verticals</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href={websiteLinks.school}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link-external"
                >
                  <span>EduPyramids School</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href={websiteLinks.college}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link-external"
                >
                  <span>EduPyramids College</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href={websiteLinks.health}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link-external"
                >
                  <span>EduPyramids Health</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Get in Touch</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <div>
                  <div className="footer-contact-label">Email</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="footer-contact-val"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <div className="footer-contact-label">Phone</div>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="footer-contact-val"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <div>
                  <div className="footer-contact-label">Headquarters</div>
                  <span className="footer-contact-val">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} EduPyramids. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#about" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-legal-divider">•</span>
            <a href="#about" className="footer-legal-link">Terms of Service</a>
            <span className="footer-legal-divider">•</span>
            <a href="#about" className="footer-legal-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
