import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * <img> that swaps to a soft gradient panel when the file is missing,
 * so the layout still looks intentional before real assets are added.
 */
export function FallbackImage({ src, alt, className, fallbackClassName, icon: Icon = ImageOff, ...props }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400',
          className,
          fallbackClassName
        )}
      >
        <Icon className="size-10 opacity-60" strokeWidth={1.5} />
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
