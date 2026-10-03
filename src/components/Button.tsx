import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Variant = 'solid' | 'outline' | 'text';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'solid',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-500 ease-premium py-4 px-8 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses: Record<Variant, string> = {
    solid: 'bg-ink text-canvas hover:bg-bronze',
    outline:
      'border border-ink text-ink hover:bg-ink hover:text-canvas',
    text:
      'text-ink relative group py-2 px-0',
  };

  const content = (
    <>
      <span>{children}</span>
      {variant === 'text' && (
        <span className="relative">
          <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        data-cursor="view"
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}

export function TextLink({
  children,
  to,
  className = '',
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-sm text-ink ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-bronze transition-all duration-500 ease-premium group-hover:w-full" />
      </span>
      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
    </Link>
  );
}
