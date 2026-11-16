import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationLinks } from '../data/landingData';
import './Navbar.css';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToTop = () => {
    closeMobileMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={scrollToTop} role="button" tabIndex={0}>
          <img
            src="/assets/EduPyramidsLogo.png"
            alt="EduPyramids Logo"
            className="navbar-logo-img"
            onError={(e) => {
              // Graceful fallback if image is missing
              e.currentTarget.style.display = 'none';
              const textFallback = e.currentTarget.parentElement.querySelector('.navbar-logo-fallback');
              if (textFallback) textFallback.style.display = 'block';
            }}
          />
          <span className="navbar-logo-fallback" style={{ display: 'none' }}>
            <span className="logo-accent">Edu</span>Pyramids
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navigationLinks.map((link) => (
              <li key={link.name} className="navbar-item">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="navbar-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions-desktop">
          <a
            href="#school"
            onClick={(e) => handleNavClick(e, '#school')}
            className="btn btn-primary navbar-cta-btn"
          >
            Explore Verticals
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="navbar-mobile-content">
          <ul className="navbar-mobile-links">
            {navigationLinks.map((link) => (
              <li key={link.name} className="navbar-mobile-item">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="navbar-mobile-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-mobile-cta">
            <a
              href="#school"
              onClick={(e) => handleNavClick(e, '#school')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Explore Verticals
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
