import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      tone: {
        neutral: 'bg-slate-50 text-slate-700 ring-slate-200',
        brand: 'bg-brand-50 text-brand-700 ring-brand-200',
        navy: 'bg-navy-50 text-navy-600 ring-navy-200',
        health: 'bg-health-50 text-health-600 ring-health-200',
      },
    },
    defaultVariants: { tone: 'neutral' },
  }
);

export function Badge({ className, tone, ...props }) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
