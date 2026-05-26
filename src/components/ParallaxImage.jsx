import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ src, alt, className = '', speed = 0.15 }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Drives internal scroll movement independently of container scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative w-full h-full ${className}`}>
      <motion.img 
        src={src}
        alt={alt}
        style={{ y, scale: 1.12 }} // Optimally scaled to prevent horizontal crop while keeping smooth parallax
        className="absolute inset-0 w-full h-full object-cover object-top origin-top transition-transform duration-700 hover:scale-[1.18] will-change-transform"
      />
    </div>
  );
}
