import { motion } from 'framer-motion';

export default function Marquee({ text, speed = 20, className = "" }) {
  // text should be something like "DIGITAL GROWTH • AUTOMATION • WEB SYSTEMS • "
  // Duplicate it multiple times to ensure seamless scrolling
  const repeatedText = Array(10).fill(text).join(' ');

  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap bg-slate-950 text-slate-100 py-4 md:py-6 border-y border-slate-800 tracking-[0.2em] uppercase font-bold text-xs md:text-md select-none pointer-events-none ${className}`}>
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
        className="flex shrink-0 items-center"
      >
        <span className="pr-12">{repeatedText}</span>
        <span className="pr-12">{repeatedText}</span>
      </motion.div>
    </div>
  );
}
