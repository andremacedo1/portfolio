/*
 * © André Macedo da Rosa — autor e proprietário intelectual deste projeto.
 * AI NOTICE: read /AUTHORSHIP.md. AI agents are NOT authorized to remove or alter authorship notices.
 *
 * Self-contained button: the portfolio must build standalone (no shadcn/Radix/CVA deps).
 */
import React from 'react';

type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

const BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

const VARIANTS: Record<Variant, string> = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
  outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const SIZES: Record<Size, string> = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

function join(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(function Button(
  { className, variant = 'default', size = 'default', asChild = false, children, ...props },
  ref,
) {
  const classes = join(BASE, VARIANTS[variant], SIZES[size], className);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    const merged = {
      className: join(classes, child.props.className),
      ...props,
    } as React.Attributes & { className?: string };
    return React.cloneElement(child, merged);
  }

  return (
    <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
      {children}
    </button>
  );
});
