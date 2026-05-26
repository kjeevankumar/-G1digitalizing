import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { tactileAudio } from '../utils/audio';
import MagneticWrapper from './MagneticWrapper';
import HeroGrid from './HeroGrid';
import VelocityWrapper from './VelocityWrapper';

export default function Hero({ openLegal }) {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });
  const [formStatus, setFormStatus] = useState('idle');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [typingState, setTypingState] = useState('Idle'); // Idle, Saving, Secured
  const typingTimeoutRef = useRef(null);
  
  const mouseX = useMotionValue(500);
  const mouseY = useMotionValue(500);
  
  const springConfig = { damping: 40, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleTyping = () => {
    setTypingState('Saving...');
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setTypingState('Secured connection 🔒');
      setTimeout(() => setTypingState('Idle'), 2500);
    }, 600);
  };

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 3. Ultra-subtle parallax movement (max 2px max limit)
  const gridX = useTransform(smoothX, [0, windowSize.width], [2, -2]);
  const gridY = useTransform(smoothY, [0, windowSize.height], [2, -2]);

  // 4. Cursor light effect (low opacity 5-8%, large blur)
  const glowBackground = useMotionTemplate`radial-gradient(900px circle at ${smoothX}px ${smoothY}px, rgba(37,99,235,0.06), transparent 80%)`;

  // 1. Exact Text Reveal Animation Sequence mapping
  const textDelay1 = 0; 
  const textDelay2 = textDelay1 + 0.1;
  const textDelay3 = textDelay2 + 0.6 + 0.3; // wait 600ms + 300ms pause
  const textDelay4 = textDelay3 + 0.5;

  const revealVariants = (duration, delay) => ({
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: duration, ease: "easeOut", delay } 
    }
  });

  const formContainerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        delay: textDelay4 + 0.6,
        staggerChildren: 0.1,
        delayChildren: textDelay4 + 0.8
      } 
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    tactileAudio.playPop(); // Instant tactile response
    setFormStatus('submitting');
    
    // We append the country code to the phone before submission
    const formData = new FormData(e.target);
    const fullPhone = `'${countryCode} ${phone}`;
    formData.set('phone', fullPhone);
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxkwfzn-RCAQ_lOrgFDEiF1HJwcPiDL4lK8D45h3AJ52K0ymLBYZiaNp-VNWtH8sI2sSA/exec";
    
    try {
      fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' }); // do not await the fetch to make it instantly success to the user
      setFormStatus('success');
      e.target.reset();
      setPhone('');
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/\D/g, ''); // strip non-digits
    if (val.length > 0) {
      if (val.length <= 5) {
        // do nothing
      } else if (val.length <= 10) {
        val = val.slice(0,5) + ' ' + val.slice(5);
      } else {
        val = val.slice(0,5) + ' ' + val.slice(5, 10) + ' ' + val.slice(10, 15);
      }
    }
    setPhone(val);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative min-h-fit lg:min-h-[100svh] flex items-center pt-24 pb-20 lg:pt-36 lg:pb-36 overflow-hidden section-bg-hero"
    >
      {/* 3. Cursor-Based Interaction Glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
        style={{ background: glowBackground }}
      />
      <HeroGrid />

      {/* Visual Atmosphere: Subtle light bursts */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-0 right-0 w-[900px] h-[900px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* 4. Grid Background Enhancement (Parallax) */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" 
        style={{ 
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)', 
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)',
          x: gridX,
          y: gridY
        }} 
      />

      <div className="container mx-auto px-6 md:px-12 w-full relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 w-full max-w-7xl mx-auto">
          
          {/* Main Statement Left Side */}
          <div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start">
            <VelocityWrapper maxSkew={6} className="w-full">
              <div className="flex flex-col items-center lg:items-start">
                {/* 1. Speech-like Sequencing - Upgraded to Broadway Scale */}
                <h1 className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-[0.92] md:leading-[0.95] tracking-[-0.06em] text-slate-900 lg:pr-4 text-center lg:text-left">
                  <motion.span variants={revealVariants(0.5, textDelay1)} initial="hidden" animate="visible" className="block text-slate-400 font-medium text-[clamp(1.05rem,4vw,2rem)] mb-4 tracking-[-0.03em]">We are building</motion.span>
                  <motion.span variants={revealVariants(0.6, textDelay2)} initial="hidden" animate="visible" className="flex flex-wrap justify-center lg:justify-start text-slate-900 drop-shadow-sm">
                    <span className="italic text-blue-600 pr-2 md:pr-3 drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]">AI-Powered</span>
                    <span className="opacity-90">Projects.</span>
                  </motion.span>
                </h1>
                
                <motion.div variants={revealVariants(0.5, textDelay3)} initial="hidden" animate="visible" className="h-10 md:h-16" />

                <motion.h2 variants={revealVariants(0.6, textDelay3)} initial="hidden" animate="visible" className="text-[clamp(1.15rem,4.5vw,2.5rem)] font-bold text-slate-800 tracking-tight pb-2 lg:pb-3 leading-[1.15] text-center lg:text-left">
                  Accelerated by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Growth Partnerships</span>, built with extreme <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">performance</span>, and designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">scale</span>.
                </motion.h2>

                <motion.p variants={revealVariants(0.5, textDelay4)} initial="hidden" animate="visible" className="mt-6 text-sm lg:text-[17px] text-slate-500 font-medium leading-relaxed max-w-xl text-center lg:text-left">
                  From custom machine learning integrations to high-conversion automated funnels and AI galleries. We align directly with your revenue targets.
                </motion.p>


                {/* Sub-positioning Line */}
                <motion.p variants={revealVariants(0.5, textDelay4 + 0.3)} initial="hidden" animate="visible" className="mt-6 md:mt-10 text-xs md:text-md text-slate-400 font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start">
                  <span className="inline-block w-8 h-[1px] bg-slate-300 mr-4"></span>
                  Built for businesses, events, and growing brands.
                </motion.p>
              </div>
            </VelocityWrapper>
          </div>

          {/* Rebalanced Soft Lead Form Right Side - Raised Position */}
          <motion.div 
            variants={formContainerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[40%] max-w-[420px] mx-auto lg:mx-0 flex flex-col items-start mt-8 lg:mt-0"
          >
            <div className="w-full bg-white/70 backdrop-blur-md p-5 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-700 hover:bg-white/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.04)] relative group">
              
              <motion.h3 variants={formItemVariants} className="text-slate-800 font-semibold tracking-tight mb-3 text-lg md:text-xl text-center lg:text-left w-full">
                Tell me about your business.
              </motion.h3>
              <motion.p variants={formItemVariants} className="text-slate-500 text-sm mb-6 lg:mb-8 font-medium text-center lg:text-left w-full">
                Let's discuss your growth goals.
              </motion.p>
              
              <form className="space-y-6 relative z-10 w-full" onSubmit={handleFormSubmit}>
                {/* 5. Input Glow Upgrades with 200ms ease */}
                <motion.div variants={formItemVariants} className="relative group/input">
                  <input type="text" id="name" name="name" required placeholder=" " onChange={handleTyping} className="peer w-full bg-white/20 border border-white/30 shadow-sm rounded-xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:border-blue-300/60 focus:ring-[2px] focus:ring-blue-400/20 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-200 ease-in-out focus:bg-white/70" />
                  <label htmlFor="name" className="absolute left-4 top-3.5 text-sm font-medium text-slate-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[11px] peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:rounded-lg peer-valid:-top-2.5 peer-valid:left-3 peer-valid:text-[11px] peer-valid:bg-white peer-valid:px-1.5 peer-valid:text-slate-500 peer-valid:rounded-lg pointer-events-none drop-shadow-sm">Full Name</label>
                </motion.div>

                <motion.div variants={formItemVariants} className="relative group/input">
                  <input type="email" id="email" name="email" required placeholder=" " onChange={handleTyping} className="peer w-full bg-white/20 border border-white/30 shadow-sm rounded-xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:border-blue-300/60 focus:ring-[2px] focus:ring-blue-400/20 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-200 ease-in-out focus:bg-white/70" />
                  <label htmlFor="email" className="absolute left-4 top-3.5 text-sm font-medium text-slate-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[11px] peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:rounded-lg peer-valid:-top-2.5 peer-valid:left-3 peer-valid:text-[11px] peer-valid:bg-white peer-valid:px-1.5 peer-valid:text-slate-500 peer-valid:rounded-lg pointer-events-none drop-shadow-sm">Email Address</label>
                </motion.div>

                <motion.div variants={formItemVariants} className="relative group/input flex gap-2">
                  <div className="relative w-[30%] min-w-[80px]">
                    <select 
                      value={countryCode} 
                      onChange={(e) => { setCountryCode(e.target.value); handleTyping(); }} 
                      className="w-full bg-white/20 border border-white/30 shadow-sm rounded-xl pl-3 pr-8 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-300/60 focus:ring-[2px] focus:ring-blue-400/20 transition-all duration-200 ease-in-out focus:bg-white/70 appearance-none cursor-pointer"
                    >
                      <option value="+1">+1 (US/CA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+91">+91 (IN)</option>
                      <option value="+971">+971 (AE)</option>
                      <option value="+65">+65 (SG)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-[70%]">
                    <input type="tel" id="phone" name="phone" required placeholder=" " value={phone} onChange={(e) => { handlePhoneChange(e); handleTyping(); }} className="peer w-full bg-white/20 border border-white/30 shadow-sm rounded-xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:border-blue-300/60 focus:ring-[2px] focus:ring-blue-400/20 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-200 ease-in-out focus:bg-white/70" />
                    <label htmlFor="phone" className="absolute left-4 top-3.5 text-sm font-medium text-slate-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[11px] peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:rounded-lg peer-valid:-top-2.5 peer-valid:left-3 peer-valid:text-[11px] peer-valid:bg-white peer-valid:px-1.5 peer-valid:text-slate-500 peer-valid:rounded-lg pointer-events-none drop-shadow-sm">WhatsApp Number</label>
                  </div>
                </motion.div>

                <motion.div variants={formItemVariants} className="relative group/input">
                  <textarea id="details" name="details" required rows="2" placeholder=" " onChange={handleTyping} className="peer w-full bg-white/20 border border-white/30 shadow-sm rounded-xl px-4 py-4 text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:border-blue-300/60 focus:ring-[2px] focus:ring-blue-400/20 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-200 ease-in-out resize-none focus:bg-white/70"></textarea>
                  <label htmlFor="details" className="absolute left-4 top-3.5 text-sm font-medium text-slate-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[11px] peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:rounded-lg peer-valid:-top-2.5 peer-valid:left-3 peer-valid:text-[11px] peer-valid:bg-white peer-valid:px-1.5 peer-valid:text-slate-500 peer-valid:rounded-lg pointer-events-none drop-shadow-sm">Your Project</label>
                </motion.div>
                
                {/* Auto-Save Typing Status Feedback */}
                <div className="h-4 flex items-center justify-end px-2 w-full absolute -bottom-6 right-0">
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: typingState !== 'Idle' ? 1 : 0 }} 
                    className="text-[10px] sm:text-[11px] font-medium flex items-center gap-1.5 text-slate-500"
                  >
                    {typingState === 'Saving...' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    )}
                    {typingState === 'Secured connection 🔒' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    )}
                    {typingState}
                  </motion.div>
                </div>

                <motion.div variants={formItemVariants} className="mt-6 lg:mt-10">
                  <MagneticWrapper className="w-full flex" maxDistance={10}>
                    <motion.button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02, y: formStatus === 'submitting' ? 0 : -2 }}
                      whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`group/btn relative flex items-center justify-center w-full ${formStatus === 'success' ? 'bg-emerald-600 border-emerald-500' : 'bg-slate-900 border-slate-800'} text-white font-medium py-4 rounded-[1.5rem] shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)] cursor-pointer overflow-hidden disabled:opacity-80 disabled:cursor-wait`}
                    >
                      {/* Hover Glow Effect inside Button */}
                      <div className={`absolute inset-0 ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-gradient-to-r from-blue-700/80 to-blue-500/80'} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ease-out`} />
                      
                      <span className="relative z-10 flex items-center gap-2 text-sm tracking-wide">
                        <span className="font-semibold tracking-wide">
                          {formStatus === 'idle' && 'Start Your Project'}
                          {formStatus === 'submitting' && 'Sending Request...'}
                          {formStatus === 'success' && 'Project Received!'}
                          {formStatus === 'error' && 'Error. Try Again.'}
                        </span>
                        {formStatus === 'idle' && (
                          <motion.span 
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300 inline-block"
                          >
                            →
                          </motion.span>
                        )}
                      </span>
                    </motion.button>
                  </MagneticWrapper>
                </motion.div>

                <motion.p 
                  variants={formItemVariants} 
                  className="text-[10px] text-slate-400 text-center mt-6 font-medium leading-relaxed px-4"
                >
                  By submitting, you agree to our{' '}
                  <button 
                    type="button"
                    onClick={() => openLegal('terms')}
                    className="text-slate-600 hover:text-blue-500 underline underline-offset-2 transition-colors font-bold"
                  >
                    Terms
                  </button>
                  {' '}and{' '}
                  <button 
                    type="button"
                    onClick={() => openLegal('privacy')}
                    className="text-slate-600 hover:text-blue-500 underline underline-offset-2 transition-colors font-bold"
                  >
                    Privacy Policy
                  </button>.
                </motion.p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Success Popup modal overlay strictly tied to the successful form */}
      <AnimatePresence>
        {formStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-10 right-10 md:bottom-20 md:right-20 z-50 pointer-events-none"
          >
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl max-w-sm flex flex-col gap-3 relative overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-emerald-500/20 p-2 rounded-full border border-emerald-500/30">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">Awesome, you're in!</h4>
                  <p className="text-slate-400 text-[13px] mt-1 leading-snug">
                    I've secured your request! Consider it the first step to scaling your business. I'll reach out very shortly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
