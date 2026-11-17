import { Building2, GraduationCap, HandHeart, Landmark, School } from 'lucide-react';
import { partnerAudiences } from '@/data/landingData';

const icons = { school: School, college: GraduationCap, ngo: HandHeart, district: Landmark };

export const PartnerSection = () => (
  <section id="partners" className="scroll-mt-16 border-t border-slate-200/70 bg-slate-50/70">
    <div className="mx-auto max-w-6xl px-4 pb-4 pt-20 sm:px-6 lg:pt-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-brand-600">For every partner</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Why partner with us</h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Looking to upskill lakhs of learners? Need a cost-effective, scalable training model?
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {partnerAudiences.map((a) => {
          const Icon = icons[a.id] ?? Building2;
          return (
            <div key={a.id} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
