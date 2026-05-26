import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InlineLegal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <div className="w-full bg-slate-900 border-t border-white/10 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-6 group"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm md:text-base font-bold tracking-wide group-hover:text-blue-400 transition-colors">
              Terms & Conditions / Privacy Policy
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded-md">
              Legal Content
            </span>
          </div>
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all text-slate-400 group-hover:text-blue-400"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pb-10 pt-4 border-t border-white/10">
                
                {/* Tabs */}
                <div className="flex bg-white/5 p-1.5 rounded-2xl w-fit mb-8">
                  <button 
                    onClick={() => setActiveTab('terms')}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'terms' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  >
                    Terms
                  </button>
                  <button 
                    onClick={() => setActiveTab('privacy')}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'privacy' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  >
                    Privacy
                  </button>
                </div>

                <div className="text-slate-400 text-sm md:text-base leading-relaxed">
                  <AnimatePresence mode="wait">
                    {activeTab === 'terms' ? (
                      <motion.div 
                        key="terms"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <section>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">01</span>
                            Service Agreement
                          </h3>
                          <p>By accessing or using G1 Digitalizing services, you agree to be bound by these Terms and Conditions. Our services include website engineering, digital growth strategies, and private digital album platforms.</p>
                        </section>
                        <section>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">02</span>
                            Deliverables & Intellectual Property
                          </h3>
                          <p>Upon final payment, clients are granted ownership of the final front-end assets. G1 Digitalizing retains rights to underlying proprietary systems, code patterns, and the right to showcase the project in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
                        </section>
                        <section>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">03</span>
                            Payment Terms
                          </h3>
                          <p>We work on a milestone-based payment structure. For smaller projects or E-commerce builds, special pricing models may apply as specified in the individual contract.</p>
                        </section>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="privacy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <section>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">01</span>
                            Data Collection
                          </h3>
                          <p>We collect essential information (Name, Email, WhatsApp number) solely to facilitate business communication and project onboarding. We do NOT sell or share your personal contact information with 3rd party marketers.</p>
                        </section>
                        <section>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">02</span>
                            The Digital Album Privacy
                          </h3>
                          <p>Our private gallery systems use encrypted access or unique algorithms for privacy. Users are responsible for managing their unique access links.</p>
                        </section>
                        <section>
                          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">03</span>
                            Consent
                          </h3>
                          <p>By submitting a contact form on our website, you provide explicit consent for us to contact you via Email or WhatsApp regarding your specific inquiry.</p>
                        </section>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
