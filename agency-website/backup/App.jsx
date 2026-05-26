import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const Advantages = lazy(() => import('./components/Advantages'));
const Services = lazy(() => import('./components/Services'));
const AIFeatureHighlight = lazy(() => import('./components/AIFeatureHighlight'));
const GrowthLeadGen = lazy(() => import('./components/GrowthLeadGen'));
const BusinessModel = lazy(() => import('./components/BusinessModel'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Founder = lazy(() => import('./components/Founder'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CtaSection = lazy(() => import('./components/CtaSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
import WhatsAppFAB from './components/WhatsAppFAB';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import CommandMenu from './components/CommandMenu';
import GrainOverlay from './components/GrainOverlay';
import LegalModal from './components/LegalModal';
import InlineLegal from './components/InlineLegal';
import ContextualDrawer from './components/ContextualDrawer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'terms' });

  const openLegal = (tab = 'terms') => setLegalModal({ isOpen: true, tab });
  const closeLegal = () => setLegalModal({ ...legalModal, isOpen: false });

  useEffect(() => {
    let resizeObserver;
    
    const updateScaleAndHeight = () => {
      const wrapper = document.getElementById('app-scale-wrapper');
      const navbar = document.getElementById('navbar-scale-wrapper');
      const root = document.getElementById('root');
      if (!wrapper || !root) return;

      if (window.innerWidth <= 768) {
        const scale = window.innerWidth / 1440;
        
        wrapper.style.transform = `scale(${scale})`;
        wrapper.style.transformOrigin = 'top left';
        wrapper.style.width = '1440px';
        
        if (navbar) {
          navbar.style.transform = `scale(${scale})`;
          navbar.style.transformOrigin = 'top left';
          navbar.style.width = '1440px';
        }
        
        // Use overflow: hidden explicitly to completely chop off the phantom unscaled DOM height!
        root.style.height = `${wrapper.getBoundingClientRect().height}px`;
        root.style.overflow = 'hidden'; 
      } else {
        wrapper.style.transform = 'none';
        wrapper.style.width = '100%';
        
        if (navbar) {
          navbar.style.transform = 'none';
          navbar.style.width = '100%';
        }
        
        root.style.height = 'auto';
        root.style.overflow = 'visible';
      }
    };

    const initObserver = () => {
      const wrapper = document.getElementById('app-scale-wrapper');
      if (wrapper) {
        // Automatically adjust if content (like images) loads later and changes height
        resizeObserver = new ResizeObserver(() => {
          updateScaleAndHeight();
        });
        resizeObserver.observe(wrapper);
      }
    };

    window.addEventListener('resize', updateScaleAndHeight);
    updateScaleAndHeight(); // Initial call
    initObserver(); // Start observing inner DOM changes

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Trigger root load animation after short delay for premium feel
    setTimeout(() => {
      const rootEl = document.getElementById('root');
      if (rootEl) rootEl.classList.add("loaded");
      
      const loader = document.getElementById('premium-loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 600);
      }
    }, 500);

    window.addEventListener("load", () => {
      const rootEl = document.getElementById('root');
      if (rootEl) rootEl.classList.add("loaded");
    });

    // Intersection Observer for scroll reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Apply only to sections that aren't the Hero (Hero has framer-motion)
    const observeSections = () => {
      document.querySelectorAll('section:not(.section-bg-hero)').forEach(sec => {
        sec.classList.add('reveal');
        observer.observe(sec);
      });
    };
    
    // Slight delay to ensure React has rendered the DOM nodes before observing
    setTimeout(observeSections, 500);

    return () => {
      window.removeEventListener('resize', updateScaleAndHeight);
      window.removeEventListener('load', () => document.body.classList.add("loaded"));
      if (resizeObserver) resizeObserver.disconnect();
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-brand-500/30 text-slate-900 relative">
      {/* 10L Global Master Video Background */}
      <div className="fixed inset-0 w-full h-[100dvh] z-[-50] overflow-hidden pointer-events-none bg-slate-50">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-303-large.mp4"
        />
        {/* Subtle color grading overlay to merge it seamlessly into our brand */}
        <div className="absolute inset-0 bg-blue-50/20 backdrop-blur-[2px] mix-blend-overlay"></div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 z-[999999]"
        style={{ scaleX }}
      />
      
      {/* Global Grain Texture */}
      <GrainOverlay />

      <Navbar />
      <div id="app-scale-wrapper" className="w-full relative z-0">
        <main>
          {/* Deck 1: Sticky Bottom Layer */}
          <div className="sticky top-0 z-0 h-[100dvh]">
            <Hero openLegal={openLegal} />
          </div>

          {/* Deck 2: The Sliding Surface Layer - Upgraded to Extreme Glassmorphism */}
          <div className="relative z-10 bg-white/55 backdrop-blur-[40px] shadow-[0_-20px_50px_rgba(37,99,235,0.05)] border-t border-white/40">
            
            {/* Transition Glows: Subtle bursts of light that appear between sections */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40"></div>
            <div className="absolute top-[20%] right-0 w-[40vw] h-[600px] bg-emerald-50/30 rounded-full blur-[100px] -z-10 pointer-events-none opacity-30"></div>
            
            <Marquee text="DIGITAL GROWTH AGENCY • PREMIUM ENGINEERING • AUTOMATION • SALES SYSTEMS • " speed={45} />
            <Suspense fallback={
              <div className="w-full flex items-center justify-center py-32">
                <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Portfolio />
              <ProblemSolution />
              <Advantages />
              <Services />
              <AIFeatureHighlight />
              <GrowthLeadGen />
              <BusinessModel />
              <Founder />
               <Testimonials />
              <FAQ />
              <CtaSection />
              <Footer openLegal={openLegal} />
              <InlineLegal />
            </Suspense>
          </div>
        </main>
      </div>
      <WhatsAppFAB />
      <BackToTop />
      <CommandMenu />
      <CustomCursor />
      <LegalModal isOpen={legalModal.isOpen} onClose={closeLegal} initialTab={legalModal.tab} />
      <ContextualDrawer />
    </div>
  );
}

export default App;
