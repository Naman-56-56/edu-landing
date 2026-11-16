import React from 'react';
import { ArrowDown, CheckCircle2, Sparkles } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';
import { organizationInfo, carouselSlides } from '../data/landingData';
import './HeroSection.css';

export const HeroSection = () => {
  const handleScrollToVerticals = (e) => {
    e.preventDefault();
    const el = document.getElementById('verticals');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="hero-section section-padding">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: About EduPyramids */}
          <div className="hero-content">
            <div className="badge-tag badge-tag-orange">
              <Sparkles size={14} />
              <span>{organizationInfo.aboutBadge}</span>
            </div>

            <h1 className="hero-title">{organizationInfo.aboutHeading}</h1>

            <p className="hero-lead">{organizationInfo.aboutLead}</p>

            <div className="hero-paragraphs">
              {organizationInfo.aboutParagraphs.map((para, index) => (
                <p key={index} className="hero-text">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights / Features */}
            <div className="hero-highlights">
              {organizationInfo.statsHighlights.map((stat, idx) => (
                <div key={idx} className="hero-stat-pill">
                  <CheckCircle2 size={16} className="stat-pill-icon" />
                  <span className="stat-pill-label">{stat.label}:</span>
                  <strong className="stat-pill-value">{stat.value}</strong>
                </div>
              ))}
            </div>

            {/* Subtle CTA */}
            <div className="hero-cta-group">
              <a
                href="#verticals"
                onClick={handleScrollToVerticals}
                className="btn btn-primary hero-btn-primary"
              >
                <span>Discover Our Verticals</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#footer"
                className="btn btn-secondary hero-btn-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="hero-carousel-col">
            <ImageCarousel slides={carouselSlides} />
          </div>
        </div>
      </div>
    </section>
  );
};
