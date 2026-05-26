import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  // Smooth out the ring fill
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  // Calculate SVG stroke offset based on generic circle (circumference = 100)
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Show only after scrolling down 500px Let's use standard event listener rather than framer motion listener for rapid state updates
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Lenis automatically hooks into this if lenis is active
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-[90px] right-[20px] md:bottom-[100px] md:right-[20px] z-[99998] w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:scale-110 active:scale-95 transition-all outline-none"
          aria-label="Back to top"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="transparent"
              strokeWidth="4"
              className="stroke-slate-200/50"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="transparent"
              strokeWidth="4"
              strokeLinecap="round"
              className="stroke-blue-600"
              style={{
                pathLength,
              }}
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-slate-700 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
