import React from 'react';
import { Layers } from 'lucide-react';
import { VerticalCard } from './VerticalCard';
import { verticalsData } from '../data/landingData';
import './OrganizationVerticals.css';

export const OrganizationVerticals = () => {
  return (
    <section id="verticals" className="verticals-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="verticals-header">
          <div className="badge-tag badge-tag-navy">
            <Layers size={14} />
            <span>Organizational Verticals</span>
          </div>

          <h2 className="verticals-main-title">
            Our Three Pillars of Impact
          </h2>

          <p className="verticals-main-subtitle">
            Explore EduPyramids specialized divisions driving transformative outcomes across primary education, higher academic institutions, and public healthcare.
          </p>
        </div>

        {/* Verticals List */}
        <div className="verticals-list">
          {verticalsData.map((vertical, index) => (
            <VerticalCard
              key={vertical.id}
              vertical={vertical}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
