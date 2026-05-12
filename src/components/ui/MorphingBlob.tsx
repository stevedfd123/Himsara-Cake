import { motion } from 'framer-motion';

export default function MorphingBlob() {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 50% 60% 50%",
          "50% 50% 20% 80% / 25% 80% 20% 75%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "40% 60% 70% 30% / 40% 50% 60% 50%",
        ],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-light/30 -z-10"
    />
  );
}
