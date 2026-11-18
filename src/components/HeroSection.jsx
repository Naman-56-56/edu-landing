import { ArrowRight, BadgeCheck } from 'lucide-react';
import { ImageCarousel } from '@/components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { organizationInfo, carouselSlides, verticalsData } from '@/data/landingData';

const dotColor = { brand: 'bg-brand-500', navy: 'bg-navy-600', health: 'bg-health-500' };

export const HeroSection = () => (
  <section id="top" className="relative overflow-hidden">
    {/* soft brand wash */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_85%_-10%,var(--color-navy-50),transparent),radial-gradient(40rem_24rem_at_0%_10%,var(--color-brand-50),transparent)]"
    />

    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-8 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-12 lg:pt-20">
      <div className="animate-fade-up">
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-600">
          {verticalsData.map((v) => (
            <a key={v.id} href={`#${v.id}`} className="inline-flex items-center gap-2 hover:text-slate-900">
              <span className={`size-2 rounded-full ${dotColor[v.tone]}`} />
              {v.title.replace('EduPyramids ', '')}
            </a>
          ))}
        </div>

        <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
          Empowering Futures through <span className="text-brand-500">Skills Training</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{organizationInfo.heroLead}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#verticals" size="lg">
            Explore Our Verticals
            <ArrowRight />
          </Button>
          <Button href="#contact" size="lg" variant="outline">
            Get in Touch
          </Button>
        </div>

        <ul className="mt-8 flex flex-col gap-2 text-sm font-medium text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {organizationInfo.trustPoints.map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-navy-600" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fade-up [animation-delay:120ms]">
        <ImageCarousel slides={carouselSlides} />
      </div>
    </div>
  </section>
);
