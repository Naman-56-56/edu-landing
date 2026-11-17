import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, GraduationCap, HeartPulse, School } from 'lucide-react';
import { FallbackImage } from '@/components/ui/fallback-image';
import { cn } from '@/lib/utils';

// Gradient shown behind each slide if its image file is missing.
const slideFallbacks = [
  { className: 'from-brand-200 via-brand-100 to-navy-100', icon: School },
  { className: 'from-navy-200 via-navy-100 to-brand-100', icon: GraduationCap },
  { className: 'from-health-200 via-health-100 to-navy-100', icon: HeartPulse },
];

export const ImageCarousel = ({ slides = [], autoPlayInterval = 5000, ariaLabel = 'EduPyramids highlights' }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoPlayInterval, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api) => setSelected(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect).on('reInit', onSelect);
    return () => emblaApi.off('select', onSelect).off('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (slides.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-navy-900/10 ring-1 ring-slate-900/5"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, idx) => {
            const fb = slideFallbacks[idx % slideFallbacks.length];
            return (
              <div
                key={slide.id ?? idx}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${slides.length}`}
                className="relative aspect-[4/3] min-w-0 shrink-0 grow-0 basis-full"
              >
                <FallbackImage
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 size-full object-cover"
                  fallbackClassName={cn('bg-gradient-to-br text-navy-600/40 [&_svg]:size-20', fb.className)}
                  icon={fb.icon}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  {slide.tag && (
                    <span className="mb-3 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                      {slide.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{slide.title}</h3>
                  {slide.subtitle && (
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/80">{slide.subtitle}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <div className="absolute right-4 top-4 flex gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous slide"
              className="flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next slide"
              className="flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="absolute bottom-6 right-6 flex gap-1.5 sm:bottom-8 sm:right-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => emblaApi?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === selected}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  idx === selected ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
