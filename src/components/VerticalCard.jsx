import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { websiteLinks } from '../config/websiteLinks';
import './VerticalCard.css';

export const VerticalCard = ({ vertical, isReversed = false }) => {
  const targetUrl = websiteLinks[vertical.linkKey] || '#';

  // Choose badge and button class based on vertical id
  const getBadgeClass = (id) => {
    switch (id) {
      case 'school':
        return 'badge-tag-orange';
      case 'college':
        return 'badge-tag-navy';
      case 'health':
        return 'badge-tag-teal';
      default:
        return 'badge-tag-orange';
    }
  };

  const getButtonClass = (id) => {
    switch (id) {
      case 'school':
        return 'btn-primary';
      case 'college':
        return 'btn-navy';
      case 'health':
        return 'btn-teal';
      default:
        return 'btn-primary';
    }
  };

  return (
    <article
      id={vertical.id}
      className={`vertical-row ${isReversed ? 'row-reversed' : ''}`}
    >
      {/* Content Column */}
      <div className="vertical-content">
        <div className={`badge-tag ${getBadgeClass(vertical.id)}`}>
          <span>{vertical.badge}</span>
        </div>

        <h2 className="vertical-title">{vertical.title}</h2>
        <h3 className="vertical-tagline">{vertical.tagline}</h3>

        <p className="vertical-description">{vertical.description}</p>

        {/* Initiatives List */}
        {vertical.initiatives && vertical.initiatives.length > 0 && (
          <div className="vertical-initiatives">
            <h4 className="initiatives-title">Key Initiatives & Highlights:</h4>
            <ul className="initiatives-list">
              {vertical.initiatives.map((item, index) => (
                <li key={index} className="initiative-item">
                  <CheckCircle
                    size={18}
                    className="initiative-icon"
                    style={{ color: vertical.accentColor }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button pointing to environment-based URL */}
        <div className="vertical-action">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${getButtonClass(vertical.id)} vertical-cta-btn`}
            aria-label={`${vertical.ctaText} - opens external website`}
          >
            <span>{vertical.ctaText}</span>
            <ExternalLink size={16} />
          </a>
          <span className="vertical-link-hint">
            Direct access to dedicated portal
          </span>
        </div>
      </div>

      {/* Visual / Image Column */}
      <div className="vertical-visual">
        <div
          className="vertical-image-card"
          style={{
            borderColor: `${vertical.accentColor}33`,
          }}
        >
          <img
            src={vertical.image}
            alt={vertical.imageAlt || vertical.title}
            className="vertical-img"
            loading="lazy"
          />
          <div className="vertical-image-backdrop" />
          <div className="vertical-image-pill" style={{ backgroundColor: vertical.accentColor }}>
            {vertical.title}
          </div>
        </div>
      </div>
    </article>
  );
};
