import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!%&*';

export default function ScramblerText({ text, className = '', delay = 0 }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView) {
      // Show completely scrambled or empty initially if wanted. 
      // We will show empty or just scrambled chars. Actually, showing invisible until inView is best.
      return;
    }

    let iterations = 0;
    const maxIterations = 15;
    
    // Wait for the delay if specified
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText((prev) => 
          text.split('')
            .map((letter, index) => {
              if (letter === ' ') return ' ';
              if (index < iterations) {
                return text[index];
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('')
        );

        if (iterations >= text.length) {
          clearInterval(interval);
        }
        
        iterations += 1/3; // Controls speed of reveal (lower is slower)
      }, 30); // 30ms between frames

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay]);

  return (
    <motion.span 
      ref={ref} 
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.1, delay }}
    >
      {displayText}
    </motion.span>
  );
}
