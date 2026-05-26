import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollRevealText from './ScrollRevealText';

export default function CtaSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      id="contact" 
      className="pt-20 pb-10 relative overflow-hidden section-bg-cta"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-end justify-between py-10 md:py-16 text-center md:text-left"
        >
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-6">Initiate</div>
            <h2 className="text-5xl sm:text-6xl lg:text-[7rem] font-bold text-slate-900 mb-6 tracking-tight leading-[1.05]">
              Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Talk.</span>
            </h2>
            <ScrollRevealText 
              text="Let’s understand your idea first. No pressure. Just a quick discussion about how we can grow your business." 
              className="text-slate-900 text-md lg:text-3xl max-w-2xl font-bold leading-[1.4] tracking-tight mx-auto md:mx-0" 
            />
          </div>

          <div className="w-auto flex justify-center mt-4 md:mt-0">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-md text-slate-900 font-bold tracking-tight hover:text-blue-600 transition-colors duration-[250ms] group"
            >
              Message on WhatsApp
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-[250ms] ease-out text-blue-600" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
