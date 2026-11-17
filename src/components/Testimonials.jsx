import { Quote } from 'lucide-react';
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

export const Testimonials = () => (
  <section id="testimonials" className="scroll-mt-16">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-600">Testimonials</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What people say</h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => {
          const tone = tones[t.tone] ?? tones.brand;
          return (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <Quote className={cn('size-7', tone.icon)} strokeWidth={1.75} aria-hidden />
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
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
                  <span className="block text-slate-600">{[t.role, t.org].filter(Boolean).join(', ')}</span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  </section>
);
