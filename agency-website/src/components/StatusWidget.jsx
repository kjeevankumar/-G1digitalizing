import { useState, useEffect } from 'react';

export default function StatusWidget({ className = '' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Get the Indian Standard Time (or local, let's use their local time for dynamic effect)
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) + ' Local');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-end ${className}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] md:text-xs font-bold text-slate-800 tracking-wide uppercase">Available for projects</span>
      </div>
      <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-semibold pr-1">
        Engineering Live • {time}
      </div>
    </div>
  );
}
