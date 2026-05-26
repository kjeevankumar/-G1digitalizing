import { motion } from 'framer-motion';

export default function AIFeatureHighlight() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      id="ai-features" 
      className="py-12 md:py-20 relative overflow-hidden section-bg-ai"
    >
      {/* Premium Background Ambiance */}
      <div className="absolute top-1/2 right-[5%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative"
          >
            <div className="inline-flex py-1.5 px-4 rounded-full bg-white border border-slate-200/80 text-blue-600 font-bold text-[10px] tracking-widest uppercase shadow-sm w-fit mb-8">
              How It Works
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Turn your photos <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.25)] inline-block tracking-[-0.03em]">into a private digital website.</span>
            </h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-500/90 text-[15px] md:text-[17px] leading-relaxed font-medium max-w-[400px] mb-7 mx-auto lg:mx-0"
            >
              Our AI scans thousands of photos in seconds and matches them to each person.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#fcfcfd] p-5 rounded-2xl md:rounded-[1.25rem] border border-slate-200/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01),0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-200 relative overflow-hidden group flex items-center justify-center w-fit min-w-[240px] md:min-w-[280px]"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full blur-xl -mr-4 -mt-4 pointer-events-none" />
              <ul className="flex flex-col gap-2.5 md:gap-3 relative z-10 text-slate-800 font-semibold text-[13px] md:text-[14px] tracking-tight w-full">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 text-[10px] border border-blue-100 shadow-sm">✓</span>
                  Upload one photo
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 text-[10px] border border-blue-100 shadow-sm">✓</span>
                  AI finds your photos quickly
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 text-[10px] border border-blue-100 shadow-sm">✓</span>
                  Private and secure delivery
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 max-w-[420px] mx-auto lg:mx-0"
            >
              <div className="text-slate-500 font-medium text-[13px] md:text-[15px] leading-[1.6] space-y-2.5">
                <p>Imagine this:</p>
                <p>You attend a wedding or event.</p>
                <p>Instead of searching through hundreds of photos, you upload one photo.</p>
                <p>Within seconds, you get all your photos. They remain private and secure.</p>
              </div>

              <div className="mt-6 pt-5 md:pt-6 border-t border-slate-200/80">
                <p className="text-slate-900 font-bold text-[15px] md:text-[17px] tracking-tight leading-snug">
                  Get only your photos. Quick and private.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col relative perspective-[1000px] mt-12 lg:mt-0">
             {/* Right Side Depth Gradient behind active step */}
             <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10" />

             {/* Step 1 */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02, x: -5, transition: { duration: 0.2 } }}
               className="flex flex-col gap-2 relative z-10 bg-white border border-slate-200/60 shadow-sm p-5 sm:p-8 rounded-2xl md:rounded-[2rem] ml-0 sm:ml-6 md:ml-12"
             >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-400 border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-xs md:text-sm hidden sm:flex"
                >
                  01
                </motion.div>
                <div className="text-slate-400 font-bold uppercase tracking-widest md:tracking-[0.2em] text-[10px]">Input</div>
                <div className="text-lg md:text-2xl tracking-tight font-bold text-slate-900">Smart Face Recognition</div>
             </motion.div>
             
             {/* Connecting Path */}
             <motion.div 
               initial={{ opacity: 0, height: 0 }}
               whileInView={{ opacity: 1, height: 48 }}
               transition={{ duration: 0.4, delay: 0.2 }}
               className="w-[2px] bg-gradient-to-b from-slate-200 via-blue-300 to-blue-500 ml-6 sm:ml-10 md:ml-20 relative overflow-hidden" 
             >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1/2 bg-white/60 blur-[1px]"
                  animate={{ y: [-24, 48] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
             </motion.div>
             
             {/* Step 2 (Active Focus) */}
             <motion.div 
               initial={{ opacity: 0, x: 20, scale: 0.95 }}
               whileInView={{ opacity: 1, x: 0, scale: 1.02 }}
               transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
               className="flex flex-col gap-1.5 md:gap-3 relative z-20 bg-blue-600 text-white p-5 sm:p-8 rounded-2xl md:rounded-[2.5rem] shadow-[0_0_30px_rgba(37,99,235,0.3),0_20px_40px_-5px_rgba(37,99,235,0.4)] border border-blue-400/40 group"
             >
                {/* Light Sweep Animation Container (Clipped) */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[2.5rem] pointer-events-none z-0">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  />
                </div>

                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-blue-700 rounded-full flex items-center justify-center font-bold text-white shadow-[0_4px_15px_rgba(29,78,216,0.5),inset_0_2px_4px_rgba(255,255,255,0.2)] text-xs md:text-base z-10 hidden sm:flex"
                >
                  02
                </motion.div>
                <div className="text-blue-200 font-bold uppercase tracking-widest md:tracking-[0.2em] text-[10px] sm:pl-2 md:pl-4 relative z-10">Process</div>
                <div className="text-md font-extrabold tracking-tight text-white sm:pl-2 md:pl-4 relative z-10">AI scans photos fast</div>
                
                <motion.div 
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-blue-700/60 py-2.5 px-5 rounded-lg md:rounded-xl text-[10px] md:text-sm font-medium tracking-wide mt-2 border border-blue-400/30 w-fit drop-shadow-sm sm:ml-2 md:ml-4 flex items-center gap-2 relative z-10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                  Scanning 10,000+ photos
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >...</motion.span>
                </motion.div>
             </motion.div>
             
             {/* Connecting Path */}
             <motion.div 
               initial={{ opacity: 0, height: 0 }}
               whileInView={{ opacity: 1, height: 48 }}
               transition={{ duration: 0.4, delay: 0.4 }}
               className="w-[2px] bg-gradient-to-b from-blue-500 via-blue-300 to-slate-200 ml-6 sm:ml-10 md:ml-20 relative overflow-hidden" 
             >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1/2 bg-white/60 blur-[1px]"
                  animate={{ y: [-24, 48] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
                />
             </motion.div>
             
             {/* Step 3 */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
               className="flex flex-col gap-2 relative z-10 bg-slate-900 text-white border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-5 sm:p-8 rounded-2xl md:rounded-[2rem] ml-0 sm:ml-6 md:ml-12"
             >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400 border border-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.2)] text-xs md:text-sm hidden sm:flex"
                >
                  03
                </motion.div>
                <div className="text-slate-500 font-bold uppercase tracking-widest md:tracking-[0.2em] text-[10px]">Output</div>
                <div className="text-lg md:text-2xl tracking-tight font-bold text-white">Get your photos</div>
             </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
