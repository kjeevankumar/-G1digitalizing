import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveOperationsWidget({ className = '' }) {
  const [activeDots, setActiveDots] = useState('');
  const [metricIndex, setMetricIndex] = useState(0);
  const [metricValue, setMetricValue] = useState(1432);

  const metrics = [
    { label: "Systems Online", value: "100%", suffix: "" },
    { label: "Digital Memories Secured", value: metricValue.toLocaleString(), suffix: "+" },
    { label: "B2B Leads Routed", value: (metricValue * 8.4).toLocaleString(), suffix: "" },
    { label: "Active Deployments", value: "3", suffix: "" }
  ];

  useEffect(() => {
    // Typing dots effect
    const dotInterval = setInterval(() => {
      setActiveDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Increment metrics artificially to simulate live data
    const metricIncrement = setInterval(() => {
      setMetricValue(prev => prev + Math.floor(Math.random() * 3));
    }, 2800);

    // Rotate metrics display
    const rotateInterval = setInterval(() => {
      setMetricIndex(prev => (prev + 1) % 4);
    }, 4500);

    return () => {
      clearInterval(dotInterval);
      clearInterval(metricIncrement);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className={`hidden md:flex fixed bottom-8 left-8 z-[900] flex-col pointer-events-auto ${className}`}>
      
      {/* Premium Glass Panel */}
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-3.5 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-between min-w-[260px] md:min-w-[320px] overflow-hidden group">
        
        {/* Animated Background Mesh Inside Ticker */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent group-hover:opacity-20 transition-opacity"></div>
        
        {/* Left: Blinking Trust Dot & Log title */}
        <div className="flex items-center gap-3 relative z-10 w-fit shrink-0">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          </div>
          <span className="text-[10px] md:text-xs font-mono font-bold text-slate-300 uppercase tracking-widest shrink-0">
            Live Ops
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-6 bg-white/10 mx-3 md:mx-4 shrink-0 relative z-10" />

        {/* Right: Rotating Metrics */}
        <div className="flex-1 relative z-10 overflow-hidden h-5 flex items-center min-w-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={metricIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full flex justify-between items-center whitespace-nowrap">
                <span className="text-[9px] md:text-[10px] text-slate-400 font-semibold tracking-wide uppercase truncate pr-2">
                  {metrics[metricIndex].label}
                </span>
                <span className="text-[11px] md:text-sm text-white font-mono font-bold tracking-tight">
                  {metrics[metricIndex].value}{metrics[metricIndex].suffix}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Decorative Matrix Lines connecting the widget */}
      <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-blue-500/20 rounded-tr-3xl pointer-events-none opacity-50" />
      <div className="absolute top-1/2 -left-12 w-10 h-px bg-gradient-to-r from-transparent to-blue-500/30 pointer-events-none" />
      
    </div>
  );
}
