import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProblemSolution() {
  const problems = ["Customers can't find you online", "Losing sales to competitors", "Slow, confusing websites", "Zero new leads coming in"];
  const solutions = ["Websites that bring you more customers", "Design that builds trust quickly", "Automations that save your time", "Systems designed to increase sales"];

  return (
    // 6. Section Flow Smoothing (fade-in on scroll), 3. Spacing Optimization (reduced top/bottom padding)
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 relative overflow-hidden section-bg-problem"
    >
      <div className="absolute top-[40%] right-[5%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14" /* 3. Reduced gap heading -> cards */
        >
           <span className="inline-flex py-1.5 px-5 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-[10px] tracking-widest uppercase shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8">
             The G1 Evolution
           </span>
           <h3 className="text-md lg:text-7xl font-extrabold leading-[1.05]">
            <span className="text-slate-800/70 tracking-[-0.04em] block mb-0">Stop Losing Customers.</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] tracking-[-0.04em] inline-block">Start Growing Faster.</span>
          </h3>
        </motion.div>

        {/* 4. Card Alignment Balance (lg:items-stretch to naturally align height) */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto perspective-[1000px] items-stretch">
          
          {/* 2. Left Card (Remove "Dummy Feel" -> Intentionally Inactive) */}
          <TiltCard className="w-full flex">
            <motion.div 
              initial={{ opacity: 0, rotateY: 4, x: -10, scale: 0.96 }}
            whileInView={{ opacity: 0.75, rotateY: 0, x: 0, scale: 0.98 }}
            whileHover={{ opacity: 0.85, y: -2, transition: { duration: 0.25, ease: "easeOut" } }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#fafbfc] border border-slate-200/50 rounded-xl md:rounded-[2.5rem] p-4 sm:p-10 lg:p-12 shadow-[inset_0_4px_20px_rgba(0,0,0,0.02),0_10px_30px_-10px_rgba(0,0,0,0.02)] relative group grayscale-[0.05] flex flex-col justify-center"
          >
            {/* Minimal Grain Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.15] rounded-xl md:rounded-[2.5rem] mix-blend-multiply" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.5%22/%3E%3C/svg%3E")' }} 
            />

            <div className="text-[6px] sm:text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-12 inline-flex items-center gap-3 relative z-10">
               <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-slate-200"></span> The Standard Agency
            </div>
            
            <ul className="space-y-4 md:space-y-8 relative z-10">
              {problems.map((prob, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="text-[10px] sm:text-md lg:text-2xl font-bold text-slate-400/80 tracking-tight flex items-center gap-5"
                >
                  <div className="w-4 h-4 md:w-10 md:h-10 rounded-full bg-slate-100/50 flex items-center justify-center flex-shrink-0 border border-slate-200/50 opacity-70">
                    <XCircle className="text-slate-300 w-2 h-2 md:w-5 md:h-5" />
                  </div>
                  <span className="line-through decoration-slate-300/60 decoration-[0.5px] md:decoration-[1px]">{prob}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          </TiltCard>

          {/* 3 & 5. Right Card (G1 System - Premium Depth & Alignment) */}
          <div className="relative">
            {/* 5. Right Card Anchor Effect (Subtle bottom glow) */}
            <div className="absolute -bottom-6 left-[10%] right-[10%] h-12 bg-blue-600/30 blur-2xl rounded-full z-0 pointer-events-none" />

            <TiltCard className="h-full w-full">
              <motion.div 
                initial={{ opacity: 0, rotateY: -4, x: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1.015 }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-br from-[#0b172a] via-blue-900 to-[#1d4ed8] rounded-xl md:rounded-[2.5rem] p-4 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.4),0_0_30px_rgba(37,99,235,0.1),inset_0_2px_4px_rgba(255,255,255,0.2)] relative overflow-hidden group transition-shadow duration-[250ms] flex flex-col justify-center border border-blue-500/10 z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-400/40 via-blue-500/0 to-transparent rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] pointer-events-none" />

              <div className="relative z-10 text-[6px] sm:text-[10px] md:text-xs font-bold text-blue-200 uppercase tracking-widest mb-12 flex items-center gap-3">
                 <span className="relative flex h-1 w-1 md:h-2 md:w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-1 w-1 md:h-2 md:w-2 bg-white"></span>
                 </span> 
                 The G1 System
              </div>
              
              <ul className="space-y-4 md:space-y-8 relative z-10">
                {solutions.map((sol, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.12) }}
                    viewport={{ once: true }}
                    className="text-[10px] sm:text-md lg:text-2xl font-semibold text-white tracking-tight flex items-center gap-5 drop-shadow-sm"
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: [0.92, 1, 1.15, 1] }}
                      transition={{ delay: 0.4 + (i * 0.12), duration: 0.6, times: [0, 0.4, 0.7, 1] }}
                      viewport={{ once: true }}
                      className="w-4 h-4 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-sm shadow-inner overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                      <CheckCircle2 className="text-white w-2 h-2 md:w-5 md:h-5 relative z-10" />
                    </motion.div>
                    {sol}
                  </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TiltCard>
          </div>
        </div>

        {/* 1. Bottom Text Integration (Moved up, fade-in mapped, tuned typography contrast) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <p className="text-md lg:text-lg text-slate-500 font-medium tracking-tight leading-[1.6]">
            Agencies focus on design.<br />
            <span className="text-slate-900 font-extrabold tracking-tight">I focus on results. I build systems to bring you customers.</span>
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
