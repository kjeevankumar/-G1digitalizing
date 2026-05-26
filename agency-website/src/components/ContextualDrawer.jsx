import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContextualDrawer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('reEntryDismissed') === 'true';
    }
    return false;
  });
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [isMinimized, setIsMinimized] = useState(false);

  // Dwell time & Scroll tracking logic
  useEffect(() => {
    if (hasDismissed) return;

    let scrollHandler;
    let exitIntentHandler;
    let hasInteractedWithHero = false; // Prevent logic if they clicked hero form

    // Check if user is typing in the hero form
    const formInputs = document.querySelectorAll('.section-bg-hero input, .section-bg-hero textarea');
    const markInteraction = () => { hasInteractedWithHero = true; };
    formInputs.forEach(input => input.addEventListener('focus', markInteraction));

    // Dwell Time: Wait 15 seconds before arming the trigger (reduced from 40s for easier testing)
    const dwellTimer = setTimeout(() => {
      scrollHandler = () => {
        if (hasInteractedWithHero || hasDismissed) return;

        const scrolled = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrolled / totalHeight;

        // Trigger when scrolled past 65%
        if (percentage >= 0.65 && !isVisible) {
          setIsVisible(true);
        }
        
        // Implicit Dismissal: Scroll back up to top 20%
        if (percentage <= 0.20) {
          setIsVisible(false);
        }
      };

      // Desktop Exit Intent Fallback
      exitIntentHandler = (e) => {
        if (hasInteractedWithHero || hasDismissed) return;
        if (e.clientY <= 0) {
          const percentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          if (percentage > 0.4) { // Only trigger exit intent if they've read something
            setIsVisible(true);
          }
        }
      };

      window.addEventListener('scroll', scrollHandler, { passive: true });
      document.addEventListener('mouseleave', exitIntentHandler);
      
      // Check immediately in case they are already scrolled down
      scrollHandler();

    }, 15000); 

    return () => {
      clearTimeout(dwellTimer);
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
      if (exitIntentHandler) document.removeEventListener('mouseleave', exitIntentHandler);
      formInputs.forEach(input => input.removeEventListener('focus', markInteraction));
    };
  }, [hasDismissed, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
    localStorage.setItem('reEntryDismissed', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData();
    formData.append('name', 'Quick Re-Entry Lead');
    formData.append('email', 'N/A');
    formData.append('phone', "'" + phone);
    formData.append('details', 'Quick Assessment Request from Contextual Popup');
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxkwfzn-RCAQ_lOrgFDEiF1HJwcPiDL4lK8D45h3AJ52K0ymLBYZiaNp-VNWtH8sI2sSA/exec";
    
    try {
      await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      setStatus('success');
      setTimeout(() => handleDismiss(), 3000);
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('idle');
    }
  };

  if (hasDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 100, x: '-50%', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
          exit={{ opacity: 0, y: 100, x: '-50%', scale: 0.9 }}
          transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
          className="fixed bottom-4 left-1/2 w-[94%] max-w-[440px] md:left-auto md:right-8 md:bottom-8 md:translate-x-0 md:w-[380px] z-[999999]"
          style={{ 
            x: '-50%',
            // Reset x transform for desktop via media query logic in Framer if needed
            // But Tailwind's md:translate-x-0 will handle it if we don't force 'x' in style on desktop
            // Actually, let's use a cleaner approach
          }}
        >
          {isMinimized ? (
            <motion.div 
              layoutId="drawer-content"
              onClick={() => setIsMinimized(false)}
              className="bg-slate-900 text-white rounded-full p-4 flex items-center gap-3 shadow-2xl cursor-pointer border border-white/20 select-none hover:bg-blue-600 transition-colors"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest pr-2">Quick Question?</span>
            </motion.div>
          ) : (
            <motion.div 
              layoutId="drawer-content"
              className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-7 md:p-9 shadow-[0_30px_90px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,1)] border border-white/60 relative overflow-hidden"
            >
              {/* Action Buttons */}
              <div className="absolute top-5 right-5 flex gap-2">
                <button 
                  onClick={() => setIsMinimized(true)}
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                  title="Minimize"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <button 
                  onClick={handleDismiss}
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                  title="Dismiss Forever"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="mb-6 pr-12">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 mb-5 shadow-sm border border-blue-100">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-none mb-3 italic uppercase">Still thinking it over?</h3>
                <p className="text-sm text-slate-600 font-medium leading-[1.6]">Let’s skip the guesswork. Drop your WhatsApp and I’ll review your business context—no pressure.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your WhatsApp Number" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-2xl px-5 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all text-white ${status === 'success' ? 'bg-emerald-500' : 'bg-slate-950 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98]'} flex items-center justify-center disabled:opacity-80 shadow-xl`}
                >
                  {status === 'idle' && 'Get My Quick Assessment'}
                  {status === 'submitting' && 'Connecting...'}
                  {status === 'success' && 'Done! Talk soon.'}
                </button>
              </form>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                <button onClick={() => setIsMinimized(true)} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Maybe Later</button>
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Premium Growth Systems</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
