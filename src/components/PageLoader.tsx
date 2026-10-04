import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center font-serif text-lg tracking-wordmark text-ink"
      >
        <img
          src="/images/manhhattan-monogram.png"
          alt="Manhattan Studio"
          className={`h-20 w-20 object-contain transition-all duration-500 md:h-19 md:w-19  brightness-0 `}
        />
        MANHHATTAN STUDIO
      </motion.div>
    </div>
  );
}
