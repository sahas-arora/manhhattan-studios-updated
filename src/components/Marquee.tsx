import { motion } from 'framer-motion';

export function Marquee({
  images,
  speed = 40,
}: {
  images: { url: string; alt: string }[];
  speed?: number;
}) {
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden"
            style={{ width: '380px', aspectRatio: '4 / 3' }}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
