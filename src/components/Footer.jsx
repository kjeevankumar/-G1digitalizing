import logo from '../assets/logo.webp';
import MagneticWrapper from './MagneticWrapper';


export default function Footer({ openLegal }) {
  return (
    <footer className="bg-liquid-mesh text-white border-none pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div className="col-span-2">
            <a href="#" className="flex items-center group relative z-10 w-fit mb-6">
              <img src={logo} alt="G1 Digitalizing" className="h-20 md:h-24 w-auto object-contain" />
            </a>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-sm font-medium">
              I build digital systems that bring you customers and help your business grow. No agency runarounds. Just real business results.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:g1digitalizing@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full flex flex-col items-center justify-center text-slate-300 bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex flex-col items-center justify-center text-slate-300 bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full flex flex-col items-center justify-center text-slate-300 bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              <a href="https://www.instagram.com/g1digitalizing?igsh=b2dvb2R0M2I3M3V6" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full flex flex-col items-center justify-center text-slate-300 bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono mb-6 text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Solutions</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><MagneticWrapper className="inline-block"><a href="#services" className="text-slate-300 hover:text-white transition-colors py-1 block">Business Websites</a></MagneticWrapper></li>
              <li><MagneticWrapper className="inline-block"><a href="#ai-features" className="text-slate-300 hover:text-white transition-colors py-1 block">AI Galleries</a></MagneticWrapper></li>
              <li><MagneticWrapper className="inline-block"><a href="#growth" className="text-slate-300 hover:text-white transition-colors py-1 block">Growth Systems</a></MagneticWrapper></li>
              <li><MagneticWrapper className="inline-block"><a href="#model" className="text-slate-300 hover:text-white transition-colors py-1 block">Pricing & Plans</a></MagneticWrapper></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono mb-6 text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><MagneticWrapper className="inline-block"><a href="#portfolio" className="text-slate-300 hover:text-white transition-colors py-1 block">Recent Work</a></MagneticWrapper></li>
              <li><MagneticWrapper className="inline-block"><button onClick={() => openLegal('terms')} className="text-slate-300 hover:text-white transition-colors py-1 block">Terms & Conditions</button></MagneticWrapper></li>
              <li><MagneticWrapper className="inline-block"><button onClick={() => openLegal('privacy')} className="text-slate-300 hover:text-white transition-colors py-1 block">Privacy Policy</button></MagneticWrapper></li>
              <li><MagneticWrapper className="inline-block"><a href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors py-1 block">Message on WhatsApp</a></MagneticWrapper></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} G1 Digitalizing.
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-emerald-400 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
            <span>Built For Business Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
