import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tactileAudio } from '../utils/audio';

export default function DirectionalButton({ children, className = '', fillClass = 'bg-blue-600', onClick, ...props }) {
  const btnRef = useRef(null);
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovering(false);
  };

  const handleClick = (e) => {
    tactileAudio.playSubtleClick();
    if (onClick) onClick(e);
  };

  const Component = props.href ? 'a' : 'button';

  return (
    <Component 
      ref={btnRef} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      onClick={handleClick}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ x: coords.x, y: coords.y, scale: 0, opacity: 0.8 }}
            animate={{ scale: 35, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`absolute rounded-full w-4 h-4 pointer-events-none z-0 ${fillClass}`}
            style={{ 
              left: 0, top: 0, 
              marginLeft: '-8px', marginTop: '-8px' // Center pivot
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </Component>
  );
}
