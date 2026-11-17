import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/landingData';
import { cn } from '@/lib/utils';

const tones = {
  brand: { icon: 'text-brand-500', avatar: 'bg-brand-100 text-brand-700' },
  navy: { icon: 'text-navy-500', avatar: 'bg-navy-100 text-navy-700' },
  health: { icon: 'text-health-500', avatar: 'bg-health-100 text-health-600' },
};

// "Mr. Amit Kumar" -> "AK", "Ms. Ashima Mittal, IAS" -> "AM"
const initials = (name) =>
  name
    .split(',')[0]
    .replace(/^(Mr|Ms|Mrs|Dr|Prof)\.?\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on('select', onSelect).on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-brand-600">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What people say</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 items-stretch">
            {testimonials.map((t) => {
              const tone = tones[t.tone] ?? tones.brand;
              return (
                <div
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div>
                      <Quote className={cn('size-7', tone.icon)} strokeWidth={1.75} aria-hidden />
                      <blockquote className="mt-5 text-[17px] leading-relaxed text-slate-700">
                        “{t.quote}”
                      </blockquote>
                    </div>
                    <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                      <span
                        aria-hidden
                        className={cn(
                          'flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
                          tone.avatar
                        )}
                      >
                        {initials(t.name)}
                      </span>
                      <span className="text-sm leading-snug">
                        <span className="block font-semibold text-slate-900">{t.name}</span>
                        <span className="block text-slate-600">
                          {[t.role, t.org].filter(Boolean).join(', ')}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel indicators & mobile arrows */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex sm:hidden size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex gap-1.5">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollTo(idx)}
                aria-label={`Go to testimonial slide ${idx + 1}`}
                aria-current={idx === selectedIndex}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  idx === selectedIndex ? 'w-6 bg-brand-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex sm:hidden size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
