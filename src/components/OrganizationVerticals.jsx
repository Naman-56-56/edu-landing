import { VerticalCard } from '@/components/VerticalCard';
import { verticalsData } from '@/data/landingData';

export const OrganizationVerticals = ({ onOpenSwayam }) => (
  <section id="verticals" className="scroll-mt-16">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-600">Our verticals</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Three pillars of impact</h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Specialised divisions driving outcomes across school education, higher education and public health.
        </p>
      </div>

      <div data-verticals-grid className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {verticalsData.map((v) => (
          <VerticalCard key={v.id} vertical={v} onOpenSwayam={onOpenSwayam} />
        ))}
      </div>
    </div>
  </section>
);
