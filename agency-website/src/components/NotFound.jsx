import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center select-none">
      {/* Animated Gradient Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <h1 className="text-[150px] font-black text-slate-900/10 leading-none tracking-tighter">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
            Lost in Space
          </h2>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 text-lg text-slate-500 font-medium max-w-md"
      >
        The coordinate you're looking for doesn't exist in our growth system. Let's get you back to safety.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-12"
      >
        <a 
          href="/"
          className="relative inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Back to Mission Control</span>
        </a>
      </motion.div>

      <div className="mt-24 flex items-center gap-8 grayscale opacity-20 select-none">
        <span className="text-xs font-bold tracking-[0.3em] uppercase">Private Encryption Active</span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase">G1 Digitalizing 2026</span>
      </div>
    </div>
  );
}
