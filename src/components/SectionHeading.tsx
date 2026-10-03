import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  className = '',
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="heading-serif text-balance"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
