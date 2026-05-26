import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticWrapper({ children, className = '', maxDistance = 15 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center, capped by maxDistance
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Apply a scaling factor to make it feel physical (e.g. 0.2 factor)
    const factor = 0.25;
    const x = Math.min(Math.max(distanceX * factor, -maxDistance), maxDistance);
    const y = Math.min(Math.max(distanceY * factor, -maxDistance), maxDistance);

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
