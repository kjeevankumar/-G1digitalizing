import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import DirectionalButton from './DirectionalButton';

const Linkedin = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const Github = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.5-5-2.5-7-3"></path></svg>);
const Instagram = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const Mail = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);

export default function Founder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax effect for the image (very slow, smooth)
  const imageParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.05]);

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      id="founder" 
      className="py-16 md:py-32 lg:py-48 relative overflow-hidden section-bg-founder"
    >
      {/* Soft spotlight lighting effects + Subtle Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Subtle grid on light background */}
      

      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center justify-between">

          {/* 1. IMAGE CONFIGURATION */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotateY: -5, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] relative group perspective-[1000px] mb-16 lg:mb-0"
          >
            {/* Soft spotlight behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,_rgba(96,165,250,0.15)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-[60px] pointer-events-none -z-10" />

            <div
              className="relative bg-white overflow-hidden aspect-[4/5] rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200/50 transition-all duration-[600ms]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Optional Subtle Grain over image */}
              <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

              <motion.img
                style={{ y: imageParallax, scale: imageScale }}
                src="/founder.png"
                alt="K. Jeevan Kumar"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
                className="w-full h-[115%] object-cover object-top origin-center transform transition-transform duration-[600ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent pointer-events-none"></div>
            </div>

            {/* 2. NAME CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 lg:-right-8 bg-white/95 border border-slate-200/50 text-slate-900 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-[1.5rem] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] z-20 block backdrop-blur-xl transition-transform duration-[400ms] ease-out hover:-translate-y-[3px]"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/50 blur-xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-2 mb-2 relative z-10">
                {/* Status Dot: Subtle Muted Pulse */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-[pulse_3s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/80"></span>
                </span>
                <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-slate-500">Available for Projects</div>
              </div>
              <div className="font-extrabold text-md tracking-tight text-slate-900 mb-1 relative z-10 block">K. Jeevan Kumar</div>
              <div className="text-md font-medium text-slate-500 relative z-10">Founder & Engineer</div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-flex py-1 px-4 rounded-full bg-white border border-slate-200/80 text-slate-500 font-bold text-[10px] md:text-[11px] tracking-widest uppercase shadow-[0_2px_10px_rgba(0,0,0,0.02)] w-fit mb-12 backdrop-blur-sm">
                The Builder
              </div>
            </motion.div>

            {/* 3. HEADING (MAIN STATEMENT) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] drop-shadow-sm">
                I don't just build websites. <br className="block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">I build systems that bring you customers.</span>
              </h2>
            </motion.div>

            {/* 4. PARAGRAPH TEXT (Staggered Intro) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-slate-500/90 text-center lg:text-left text-md lg:text-[1.2rem] leading-[1.9] mb-8 font-medium max-w-xl"
            >
              I’m not an agency. You work directly with me to grow your business.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-slate-500/90 text-center lg:text-left text-md lg:text-[1.2rem] leading-[1.9] mb-12 lg:mb-16 font-medium max-w-xl relative"
            >
              No layers. No confusion. Just results. Every website I build is designed to increase your leads and sales.
            </motion.p>

            {/* 5. CTA BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start pt-12 border-t border-slate-200/60 w-full"
            >
              <a 
                href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(30,41,59,0.15)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)] hover:bg-blue-600 transition-all duration-300 group hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Message on WhatsApp
              </a>

              <DirectionalButton 
                href="https://kjeevankumar.github.io/kjeevankumar.g1/"
                target="_blank"
                rel="noopener noreferrer"
                fillClass="bg-blue-600"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(30,41,59,0.05)] border border-slate-200 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group hover:-translate-y-1 hover:text-white w-full sm:w-auto text-center"
              >
                View Founder Portfolio
              </DirectionalButton>
            </motion.div>

            {/* 6. SOCIAL LINKS (SPACIOUS & PERFECTLY CENTERED) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="mt-14 w-full flex flex-col items-center lg:items-start"
            >
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-6 text-center lg:text-left">
                Connect with the founder
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start font-bold text-[11px] md:text-xs uppercase tracking-widest text-slate-500 w-full">
                <a href="mailto:g1digitalizing@gmail.com" className="relative group flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 py-1">
                  <Mail className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-blue-500" />
                  <span>Email</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="https://www.linkedin.com/in/k-jeevan-kumar-5333b32b8/" target="_blank" rel="noreferrer" className="relative group flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 py-1">
                  <Linkedin className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-blue-500" />
                  <span>LinkedIn</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="https://github.com/kjeevankumar" target="_blank" rel="noreferrer" className="relative group flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 py-1">
                  <Github className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-blue-500" />
                  <span>GitHub</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="https://www.instagram.com/g1digitalizing?igsh=b2dvb2R0M2I3M3V6" target="_blank" rel="noopener noreferrer" className="relative group flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 py-1">
                  <Instagram className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-blue-500" />
                  <span>Instagram</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </motion.div>
            
            {/* 9. EMOTIONAL MICRO-DETAIL */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="mt-16 lg:mt-24 flex justify-center lg:justify-start w-full"
            >
              <div className="relative inline-block text-center lg:text-left">
                <span className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                  Built to grow real businesses, not just impress.
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 w-8 h-[1px] bg-slate-300"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
