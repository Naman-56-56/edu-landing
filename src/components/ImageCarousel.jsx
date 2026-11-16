import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageCarousel.css';

export const ImageCarousel = ({
  slides = [],
  autoPlayInterval = 5000,
  ariaLabel = 'EduPyramids Highlights Carousel',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slideCount = slides.length;

  const nextSlide = useCallback(() => {
    if (slideCount === 0) return;
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    if (slideCount === 0) return;
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    if (isPaused || slideCount <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, slideCount, autoPlayInterval, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  if (slideCount === 0) {
    return null;
  }

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label={ariaLabel}
      role="region"
    >
      <div className="carousel-stage">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id || idx}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="carousel-image-container">
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="carousel-image"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="carousel-gradient-overlay" />
              </div>

              {(slide.title || slide.subtitle) && (
                <div className="carousel-caption">
                  {slide.tag && (
                    <span className="carousel-caption-tag">{slide.tag}</span>
                  )}
                  {slide.title && (
                    <h3 className="carousel-caption-title">{slide.title}</h3>
                  )}
                  {slide.subtitle && (
                    <p className="carousel-caption-subtitle">{slide.subtitle}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Prev / Next Controls */}
      {slideCount > 1 && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Indicators / Dots */}
      {slideCount > 1 && (
        <div className="carousel-indicators" role="tablist">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to slide ${idx + 1}`}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
