import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StatusWidget from './StatusWidget';
import MagneticWrapper from './MagneticWrapper';
import logo from '../assets/logo.webp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Websites', href: '#services' },
    { name: 'AI Galleries', href: '#ai-features' },
    { name: 'Growth Systems', href: '#growth' },
    { name: 'Pricing', href: '#model' },
    { name: 'Our Work', href: '#portfolio' },
  ];

  return (
    <header id="navbar-scale-wrapper" className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/50 backdrop-blur-2xl border-b border-white/40 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] supports-[backdrop-filter]:bg-white/40' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-12 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center group relative z-10 w-fit overflow-hidden px-1">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-25deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-20 pointer-events-none mix-blend-overlay"></div>
          <img src={logo} alt="G1 Digitalizing" className="h-[5rem] md:h-[6rem] w-auto object-contain group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-105 transition-all duration-500 will-change-transform ease-out" />
        </a>

        {/* Desktop Nav */}
        <nav className="flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <MagneticWrapper key={link.name}>
                <a href={link.href} className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 hover:text-blue-600 transition-colors duration-300 block px-2 py-1">
                  {link.name}
                </a>
              </MagneticWrapper>
            ))}
          </div>
        </nav>

        {/* CTA / Status */}
        <div className="flex shrink-0 items-center justify-end gap-6">
          <a
            href="https://wa.me/917816006648?text=Hi,%20I%20want%20to%20build%20something%20for%20my%20business." target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 border border-blue-500 text-white hover:bg-slate-900 hover:border-slate-800 transition-all duration-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase cursor-pointer group shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          >
            <span>Start Project</span>
            <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
              <span className="absolute transition-transform duration-300 ease-out translate-x-0 group-hover:translate-x-[150%] text-sm">→</span>
              <span className="absolute transition-transform duration-300 ease-out -translate-x-[150%] group-hover:translate-x-0 text-sm">→</span>
            </span>
          </a>
          <StatusWidget className="max-lg:hidden" />
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden relative z-10 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-slate-50 lg:hidden overflow-hidden flex flex-col pt-32 px-6 z-0 border-b border-slate-200"
          >
            <div className="flex flex-col gap-8">
              <div className="text-[10px] text-slate-400 font-mono tracking-[0.3em] uppercase mb-4">Index</div>
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-4xl font-medium tracking-tighter text-slate-900 hover:text-blue-600 transition-colors border-b border-slate-200 pb-6"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business." target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)} 
                className="w-fit border-b border-slate-900 text-sm uppercase tracking-[0.2em] font-mono text-slate-900 hover:text-blue-600 hover:border-blue-600 mt-8 pb-2 transition-colors duration-300"
              >
                Message on WhatsApp
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
