import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  
  // Motion values to track mouse position heavily smoothed
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  
  // Convert mouse position to rotation (max 10 degrees pitch/yaw)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  // Dynamic internal glare
  const sheenOpacity = useTransform(smoothY, [-0.5, 0.5], [0, 0.2]);
  const sheenBackground = useMotionTemplate`linear-gradient(${useTransform(smoothX, [-0.5, 0.5], [-45, 45])}deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized mouse position relative to card center (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group perspective-1000 ${className}`}
    >
      {/* Dynamic light reflection layer */}
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none rounded-[inherit] mix-blend-overlay"
        style={{
          background: sheenBackground,
          opacity: sheenOpacity
        }}
      />
      {children}
    </motion.div>
  );
}
