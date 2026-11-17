import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-brand-500 text-white shadow-sm hover:bg-brand-600',
        navy: 'bg-navy-600 text-white shadow-sm hover:bg-navy-700',
        outline: 'border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50 hover:border-slate-300',
        ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        white: 'bg-white text-navy-900 shadow-sm hover:bg-slate-100',
        link: 'h-auto px-0 text-slate-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-6 text-[15px]',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export function Button({ className, variant, size, asChild, ...props }) {
  const Comp = props.href ? 'a' : 'button';
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
