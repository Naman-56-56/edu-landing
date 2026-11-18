import { implementedIn, reachStats } from '@/data/landingData';

export const StatsBand = () => (
  <section aria-label="Spoken Tutorial in numbers" className="px-4 pb-4 pt-10 sm:px-6 lg:pt-14">
    <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10">
      <p className="text-center text-sm font-semibold text-brand-600 lg:text-left">Our Reach So Far</p>
      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-slate-200">
        {reachStats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse text-center lg:text-left ${i > 0 ? 'lg:pl-6' : ''} ${
              i === reachStats.length - 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <dt className="mt-1 text-sm leading-snug text-slate-600">{s.label}</dt>
            <dd className="text-3xl font-bold tracking-tight text-navy-600 tabular-nums">{s.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 lg:flex-row lg:items-baseline lg:gap-6">
        <p className="shrink-0 text-center text-sm font-medium text-slate-500 lg:text-left">Implemented in and Partnered With</p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700 lg:justify-start">
          {implementedIn.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
