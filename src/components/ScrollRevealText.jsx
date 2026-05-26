import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <motion.span style={{ opacity }}>
        {word}
      </motion.span>
    </span>
  );
}

export default function ScrollRevealText({ text, className = "" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // Ensure values strictly stay between 0 and 1 before mapping
        const clampedStart = Math.min(Math.max(start, 0), 1);
        const clampedEnd = Math.min(Math.max(end, 0), 1);

        return (
          <Word 
            key={i} 
            word={word} 
            progress={scrollYProgress} 
            range={[clampedStart, clampedEnd]} 
          />
        );
      })}
    </p>
  );
}
