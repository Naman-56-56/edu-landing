import { founderVision } from '@/data/landingData';
import { FallbackImage } from '@/components/ui/fallback-image';
import { User } from 'lucide-react';

/** Renders nothing until `founderVision` is filled in in landingData.js. */
export const FounderVision = () => {
  if (!founderVision?.quote?.length || !founderVision.name) return null;
  const { name, title, photo, quote, headline } = founderVision;

  return (
    <section id="founder" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-28">
        <FallbackImage
          src={photo}
          alt={name}
          icon={User}
          loading="lazy"
          className="mx-auto aspect-[4/5] w-60 rounded-2xl object-cover object-top shadow-xl shadow-navy-900/10 ring-1 ring-slate-900/5"
          fallbackClassName="bg-none bg-navy-50 text-navy-500/40 [&_svg]:size-16"
        />
        <figure>
          <p className="text-sm font-semibold text-brand-600">Founder’s Vision</p>
          {headline && <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{headline}</h2>}
          <blockquote className="mt-6 space-y-4 text-[17px] leading-relaxed text-slate-600">
            {quote.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </blockquote>
          <figcaption className="mt-8 border-l-2 border-brand-500 pl-4">
            <span className="block font-semibold text-slate-900">{name}</span>
            {title && <span className="block text-sm text-slate-600">{title}</span>}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
