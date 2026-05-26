import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LegalModal({ isOpen, onClose, initialTab = 'terms' }) {
  const [prevInitialTab, setPrevInitialTab] = useState(initialTab);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [activeTab, setActiveTab] = useState(initialTab);

  if (initialTab !== prevInitialTab || isOpen !== prevIsOpen) {
    setPrevInitialTab(initialTab);
    setPrevIsOpen(isOpen);
    setActiveTab(initialTab);
  }

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999999] flex items-center justify-center p-4 md:p-10">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 pt-10 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Legal Center</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium italic">Ensuring your data privacy & business integrity.</p>
            </div>
            
            <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
              <button 
                onClick={() => setActiveTab('terms')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'terms' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Terms
              </button>
              <button 
                onClick={() => setActiveTab('privacy')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'privacy' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Privacy
              </button>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-10 text-slate-600 leading-relaxed text-sm md:text-base">
            <AnimatePresence mode="wait">
              {activeTab === 'terms' ? (
                <motion.div 
                  key="terms"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-8"
                >
                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs">01</span>
                      Service Agreement
                    </h3>
                    <p>By accessing or using G1 Digitalizing services, you agree to be bound by these Terms and Conditions. Our services include but are not limited to website engineering, digital growth strategies, and private digital album platforms.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs">02</span>
                      Project Initialization
                    </h3>
                    <p>Projects are initiated after a consultation and an agreed-upon scope of work. We reserve the right to decline projects that do not align with our technological standards or business capabilities.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs">03</span>
                      Deliverables & Intellectual Property
                    </h3>
                    <p>Upon final payment, clients are granted ownership of the final front-end assets. G1 Digitalizing retains rights to underlying proprietary systems, code patterns, and the right to showcase the project in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs">04</span>
                      Payment Terms
                    </h3>
                    <p>We work on a milestone-based payment structure. For smaller projects or E-commerce builds, special pricing models (e.g., performance-based or low upfront) may apply as specified in the individual contract.</p>
                  </section>
                </motion.div>
              ) : (
                <motion.div 
                  key="privacy"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">01</span>
                      Data Collection
                    </h3>
                    <p>We collect essential information (Name, Email, WhatsApp number) solely to facilitate business communication and project onboarding. We do NOT sell or share your personal contact information with 3rd party marketers.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">02</span>
                      The Digital Album Privacy
                    </h3>
                    <p>Our private gallery systems use encrypted access or unique algorithms for privacy. While we take extreme measures to ensure "leak-proof" digital memories, users are responsible for managing their unique access links.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">03</span>
                      Analytics & Tracking
                    </h3>
                    <p>We use lightweight, privacy-conscious analytics (like Vercel Analytics) to improve site performance. We do not use invasive tracking pixels that follow you across the web.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">04</span>
                      Consent
                    </h3>
                    <p>By submitting a contact form on our website, you provide explicit consent for us to contact you via Email or WhatsApp regarding your specific inquiry.</p>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-8 border-t border-slate-100 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Version 2.0 • Last Updated April 2026</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
