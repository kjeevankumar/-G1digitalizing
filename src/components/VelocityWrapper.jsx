import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

export default function VelocityWrapper({ children, className = '', maxSkew = 10 }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const skewY = useTransform(smoothVelocity, [-1000, 1000], [-maxSkew, maxSkew]);

  return (
    <motion.div style={{ skewY }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
}
