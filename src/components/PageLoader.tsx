import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="font-serif text-lg tracking-wordmark text-ink"
      >
        MANHHATTAN STUDIOS
      </motion.div>
    </div>
  );
}
