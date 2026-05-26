import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import scalableImg from '../assets/scalable-3d.png';
import intuitiveImg from '../assets/intuitive-3d.png';
import powerfulImg from '../assets/powerful-3d.png';

const advantages = [
  {
    id: '01',
    title: 'SCALABLE',
    description: 'We engineer architectures capable of scaling to thousands of simultaneous high-intent users without dropping a single lead. Built on top-tier elastic infrastructure.',
    image: scalableImg
  },
  {
    id: '02',
    title: 'INTUITIVE',
    description: 'We believe complex backend systems must feel invisible. Your customers experience a deeply engaging, frictionless journey from landing to final checkout.',
    image: intuitiveImg
  },
  {
    id: '03',
    title: 'POWERFUL',
    description: 'Data-driven and extremely fast. We strip away generic templates and build high-performance tools that dominate your competitive sector.',
    image: powerfulImg
  }
];

function DesktopLayout({ containerRef, scrollYProgress }) {
  const activeIndex = useTransform(scrollYProgress, v => {
    if (v < 0.33) return 0;
    if (v < 0.66) return 1;
    return 2;
  });

  return (
    <div className="flex flex-row gap-16 w-full relative">
      {/* Static Pinned Left Side (3D Visuals) */}
      <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-0">
        <div className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-white/70 font-bold text-[10px] tracking-widest uppercase mb-8 w-fit backdrop-blur-sm">
          Core Architecture
        </div>
        <div className="relative w-full aspect-square max-h-[75vh] bg-slate-800/30 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center p-8">
          {advantages.map((adv, i) => (
            <DesktopImage key={i} adv={adv} i={i} activeIndex={activeIndex} />
          ))}
        </div>
      </div>

      {/* Scrolling Right Side (Typography Tabs) */}
      <div className="w-1/2 relative py-[50vh]">
        {advantages.map((adv, i) => (
          <DesktopText key={i} adv={adv} i={i} activeIndex={activeIndex} />
        ))}
      </div>
    </div>
  );
}

function DesktopImage({ adv, i, activeIndex }) {
  const opacity = useTransform(activeIndex, val => val === i ? 1 : 0);
  const scale = useTransform(activeIndex, val => val === i ? 1 : 0.95);
  const zIndex = useTransform(activeIndex, val => val === i ? 10 : 0);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full p-4"
      style={{ opacity, scale, zIndex }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TiltCard className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl">
         <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10 pointer-events-none" />
         <img src={adv.image} alt={adv.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      </TiltCard>
    </motion.div>
  );
}

function DesktopText({ adv, i, activeIndex }) {
  const opacity = useTransform(activeIndex, val => val === i ? 1 : 0);
  const y = useTransform(activeIndex, val => val === i ? 0 : 20);
  const accentColor = useTransform(activeIndex, val => val === i ? '#3B82F6' : 'transparent');
  const titleColor = useTransform(activeIndex, val => val === i ? '#FFFFFF' : 'transparent');

  return (
    <div className="mb-[60vh] last:mb-[20vh] min-h-[40vh] flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-4">
        <motion.span 
          style={{ color: accentColor, opacity }}
          className="font-mono text-sm md:text-base font-bold transition-all duration-500"
        >
          /{adv.id}
        </motion.span>
      </div>
      <h3 className="text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[0.9]">
        <motion.span 
          style={{ color: titleColor, opacity }}
          className="transition-all duration-500 block"
        >
          {adv.title}
        </motion.span>
      </h3>
      <motion.p 
        style={{ opacity, y }}
        className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md transition-all duration-700 ease-out"
      >
        {adv.description}
      </motion.p>
    </div>
  );
}

function MobileLayout() {
  return (
    <div className="flex flex-col gap-24 w-full">
      <div className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-white/70 font-bold text-[10px] tracking-widest uppercase mb-8 w-fit backdrop-blur-sm">
        Core Architecture
      </div>
      
      {advantages.map((adv, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="relative w-full max-w-xs sm:max-w-md mx-auto aspect-square bg-slate-800/30 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center p-4 mb-10">
            <TiltCard className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl">
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10 pointer-events-none" />
               <img src={adv.image} alt={adv.title} className="w-full h-full object-cover" />
               
               {/* Floating Serial Overlay */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                 <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 px-4 py-1.5 rounded-full font-mono text-blue-400 text-xs font-bold tracking-widest">
                   /{adv.id}
                 </div>
               </div>
            </TiltCard>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white uppercase italic">
              {adv.title}
            </h3>
            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-xs">
              {adv.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Advantages() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-slate-900/70 backdrop-blur-3xl border-y border-slate-800/50 text-white z-10 transition-colors duration-700 pt-20 pb-20 md:pt-32 md:pb-64">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        {isMobile ? (
          <MobileLayout />
        ) : (
          <DesktopLayout containerRef={containerRef} scrollYProgress={scrollYProgress} />
        )}
      </div>
    </section>
  );
}
