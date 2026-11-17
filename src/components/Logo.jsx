import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className }) {
  const [markFailed, setMarkFailed] = useState(false);

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      {!markFailed && (
        <img
          src="/assets/logo-mark.png"
          alt=""
          className="h-8 w-auto"
          onError={() => setMarkFailed(true)}
        />
      )}
      <span className="text-xl font-bold tracking-tight text-navy-600">
        <span className="text-brand-500">Edu</span>Pyramids
      </span>
    </span>
  );
}
