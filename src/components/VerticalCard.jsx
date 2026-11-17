import { ArrowUpRight, Check, GraduationCap, HeartPulse, School } from 'lucide-react';
import { websiteLinks } from '@/config/websiteLinks';
import { Badge } from '@/components/ui/badge';
import { FallbackImage } from '@/components/ui/fallback-image';
import { cn } from '@/lib/utils';

const toneStyles = {
  brand: { icon: School, text: 'text-brand-600', check: 'text-brand-500', fallback: 'from-brand-100 to-brand-50 text-brand-500/50' },
  navy: { icon: GraduationCap, text: 'text-navy-600', check: 'text-navy-500', fallback: 'from-navy-100 to-navy-50 text-navy-500/50' },
  health: { icon: HeartPulse, text: 'text-health-600', check: 'text-health-500', fallback: 'from-health-100 to-health-50 text-health-500/50' },
};

export const VerticalCard = ({ vertical }) => {
  const href = websiteLinks[vertical.linkKey] || '#';
  const tone = toneStyles[vertical.tone] ?? toneStyles.brand;

  return (
    <article
      id={vertical.id}
      className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-navy-900/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 short:aspect-[2/1] shorter:aspect-[7/2]">
        <FallbackImage
          src={vertical.image}
          alt={vertical.imageAlt || vertical.title}
          loading="lazy"
          icon={tone.icon}
          className={cn(
            'size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]',
            vertical.imagePosition === 'top' && 'object-top'
          )}
          fallbackClassName={cn('bg-gradient-to-br [&_svg]:size-14', tone.fallback)}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7 short:p-6">
        <Badge tone={vertical.tone} className="self-start">
          {vertical.badge}
        </Badge>

        <h3 className="mt-4 text-xl font-semibold short:mt-3">{vertical.title}</h3>
        <p className={cn('mt-1 text-sm font-medium', tone.text)}>{vertical.tagline}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-600 short:mt-3">{vertical.summary}</p>

        <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 short:mt-4 short:space-y-2 short:pt-4">
          {vertical.initiatives.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-slate-600">
              <Check className={cn('mt-0.5 size-4 shrink-0', tone.check)} strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${vertical.ctaText} (opens in a new tab)`}
          className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm short:pt-5 font-semibold text-slate-900 transition-colors hover:text-brand-600"
        >
          {vertical.ctaText}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
};
