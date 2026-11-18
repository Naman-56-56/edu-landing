import { Award, Check } from 'lucide-react';
import { methodInfo } from '@/data/landingData';

export const MethodSection = () => (
  <section id="about" className="scroll-mt-16 border-y border-slate-200/70 bg-slate-50/70">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20 lg:py-24">
      <div>
        <p className="text-sm font-semibold text-brand-600">{methodInfo.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{methodInfo.heading}</h2>
        {methodInfo.graphic && (
          <img
            src={methodInfo.graphic}
            alt="Watch, practice, repeat"
            loading="lazy"
            className="mt-6 w-full max-w-md mix-blend-multiply"
            onError={(e) => e.currentTarget.remove()}
          />
        )}
        <p className="mt-5 text-lg leading-relaxed text-slate-700">{methodInfo.lead}</p>
        <p className="mt-4 text-[17px] leading-relaxed text-slate-600">{methodInfo.body}</p>

        <ul className="mt-8 space-y-3">
          {methodInfo.points.map((p) => (
            <li key={p} className="flex gap-3 text-[15px] text-slate-700">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <Check className="size-3 text-brand-600" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(24rem_14rem_at_100%_0%,rgb(58_65_168/0.7),transparent)]"
          />
          <div className="relative">
            <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/20">
              <Award className="size-5" />
            </div>
            <p className="mt-6 text-sm font-medium text-navy-100">{methodInfo.standard.title}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">{methodInfo.standard.code}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-100">{methodInfo.standard.text}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-sm font-semibold text-slate-900">Built for Every Setting</h3>
          <ul className="mt-4 space-y-2.5">
            {methodInfo.settings.map((s) => (
              <li key={s} className="flex gap-2.5 text-sm text-slate-600">
                <Check className="mt-0.5 size-4 shrink-0 text-navy-500" strokeWidth={2.5} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
